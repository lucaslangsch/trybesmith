export default function mapStatusHTTP(type: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SUCCESSFUL: 200,
    CREATED: 201,
  };

  return statusHTTPMap[type];
}