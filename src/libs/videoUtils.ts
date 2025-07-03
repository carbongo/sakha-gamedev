export const getEmbedUrl = (url: string): string => {
  // YouTube URL conversion
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&?]+)/
    );
    if (videoIdMatch?.[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&mute=1`;
    }
  }

  // Vimeo URL conversion
  if (url.includes("vimeo.com")) {
    const videoIdMatch = url.match(/vimeo.com\/(\d+)/);
    if (videoIdMatch?.[1]) {
      return `https://player.vimeo.com/video/${videoIdMatch[1]}?autoplay=1`;
    }
  }

  // Fallback for direct video URLs or unsupported platforms
  return url;
};
