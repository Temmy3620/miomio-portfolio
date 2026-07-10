import { get } from '@vercel/edge-config';
import fs from 'fs';
import path from 'path';

export async function loadData<T>(key: string, localFileName: string): Promise<T> {
  const hasEdgeConfig = Boolean(process.env.EDGE_CONFIG);

  if (hasEdgeConfig) {
    try {
      const data = await get<T>(key);
      if (data) {
        return data;
      }
    } catch (error) {
      console.error(`[dataLoader] Failed to get ${key} from Edge Config:`, error);
    }
  }

  // Fallback to local file
  const filePath = path.join(process.cwd(), 'data', localFileName);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`[dataLoader] Failed to read local file ${filePath}:`, error);
    throw error;
  }
}
