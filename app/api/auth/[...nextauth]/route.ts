import { handlers } from "@/auth";

export const { GET: GetHandler, POST: PostHandler } = handlers;

export const GET = async (
  ...args: Parameters<typeof GetHandler>
): Promise<ReturnType<typeof GetHandler>> => {
  try {
    return await GetHandler(...args);
  } catch (error) {
    console.error("GET Handler Error:", error);
    throw error;
  }
};

export const POST = async (
  ...args: Parameters<typeof PostHandler>
): Promise<ReturnType<typeof PostHandler>> => {
  try {
    return await PostHandler(...args);
  } catch (error) {
    console.error("POST Handler Error:", error);
    throw error;
  }
};
