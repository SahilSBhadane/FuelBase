import crypto from 'crypto';

const CONSUMER_KEY = process.env.FATSECRET_CONSUMER_KEY!;
const CONSUMER_SECRET = process.env.FATSECRET_CONSUMER_SECRET!;
const API_URL = 'https://platform.fatsecret.com/rest/server.api';

function generateOAuthSignature(params: Record<string, string>) {
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  const baseString = `GET&${encodeURIComponent(API_URL)}&${encodeURIComponent(sortedParams)}`;
  const signingKey = `${encodeURIComponent(CONSUMER_SECRET)}&`;
  
  const signature = crypto
    .createHmac('sha1', signingKey)
    .update(baseString)
    .digest('base64');

  return signature;
}

export async function searchFoods(query: string) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString('hex');

  const params: Record<string, string> = {
    method: 'foods.search',
    search_expression: query,
    format: 'json',
    oauth_consumer_key: CONSUMER_KEY,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_nonce: nonce,
    oauth_version: '1.0',
  };

  const signature = generateOAuthSignature(params);
  params.oauth_signature = signature;

  const queryString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  const url = `${API_URL}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.foods || !data.foods.food) {
      return [];
    }

    const foods = Array.isArray(data.foods.food) 
      ? data.foods.food 
      : [data.foods.food];

    return foods.map((food: any) => ({
      id: food.food_id,
      name: food.food_name,
      description: food.food_description,
      brand: food.brand_name || null,
    }));
  } catch (error) {
    console.error('FatSecret API Error:', error);
    return [];
  }
}

export async function getFoodDetails(foodId: string) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString('hex');

  const params: Record<string, string> = {
    method: 'food.get.v2',
    food_id: foodId,
    format: 'json',
    oauth_consumer_key: CONSUMER_KEY,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_nonce: nonce,
    oauth_version: '1.0',
  };

  const signature = generateOAuthSignature(params);
  params.oauth_signature = signature;

  const queryString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  const url = `${API_URL}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const serving = Array.isArray(data.food.servings.serving) 
      ? data.food.servings.serving[0]
      : data.food.servings.serving;
    
    return {
      calories: parseFloat(serving.calories) || 0,
      protein: parseFloat(serving.protein) || 0,
      carbs: parseFloat(serving.carbohydrate) || 0,
      fats: parseFloat(serving.fat) || 0,
      serving_description: serving.serving_description,
    };
  } catch (error) {
    console.error('FatSecret API Error:', error);
    return null;
  }
}