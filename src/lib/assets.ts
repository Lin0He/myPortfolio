export const RESUME_FILE_NAME = "Lin-He-Resume.pdf";

export function getPublicAssetUrl(path: string, baseUrl = import.meta.env.BASE_URL): string {
  const normalizedPath = path.replace(/^\/+/, "");
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${normalizedPath}`;
}

export function getResumeUrl(baseUrl = import.meta.env.BASE_URL): string {
  return getPublicAssetUrl(`resume/${RESUME_FILE_NAME}`, baseUrl);
}
