# Video Optimization Guide for VLN Catering Website

## Current Setup
The website uses external videos from Pexels CDN, which are already optimized and cached. However, for production deployments, follow this guide.

## Video Optimization Best Practices

### 1. Use Multiple Format Encodings
Create multiple quality variants for different connection speeds and devices:

```bash
# 1080p HD (2.5-3.5 Mbps bitrate)
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -s 1920x1080 -b:v 3500k -b:a 128k output-1080p.mp4

# 720p SD (1.5-2.5 Mbps bitrate)
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 24 -s 1280x720 -b:v 2000k -b:a 128k output-720p.mp4

# 480p Mobile (800-1000 Kbps bitrate)
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 26 -s 854x480 -b:v 900k -b:a 96k output-480p.mp4
```

### 2. Create WebM Format (Better Compression)
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k output.webm
```

### 3. Key Optimization Parameters
- **CRF (Constant Rate Factor)**: 18-28 (lower = better quality, larger file)
  - 22-24 for HD content (optimal quality/size)
  - 26-28 for SD/mobile content
- **Preset**: 'slow' for better compression without extreme encoding time
- **Bitrate**: Limit to prevent excessive file sizes
- **Resolution**: Match common viewport sizes (1920x1080, 1280x720, 854x480)

### 4. File Size Targets
- Hero video (1080p): < 5MB for smooth autoplay
- Video card (720p): < 3MB
- Mobile versions (480p): < 1.5MB

### 5. Implementation Strategy

#### Store Videos Locally
```
public/videos/
├── hero-video-1080p.mp4      (primary)
├── hero-video-1080p.webm     (modern browsers)
├── hero-video-720p.mp4       (fallback)
└── hero-video-poster.jpg     (poster image)
```

#### Use HTML5 Video with Adaptive Quality
```jsx
<video
  preload="metadata"
  poster="/videos/hero-video-poster.jpg"
  autoPlay
  loop
  muted
  playsInline
  className="h-full w-full object-cover"
>
  <source src="/videos/hero-video-1080p.webm" type="video/webm" />
  <source src="/videos/hero-video-1080p.mp4" type="video/mp4" />
</video>
```

### 6. Performance Impact
Expected improvements with proper video optimization:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hero Video Size | 15-25MB | 2-4MB | 75-85% |
| Initial Load Time | 5-8s | 1-2s | 60-75% |
| Mobile Load Time | 10-15s | 2-3s | 80-85% |
| LCP (Largest Contentful Paint) | 3-4s | <2.5s | ✅ Good |

### 7. Lazy Loading for Video Cards
```jsx
<video
  preload="none"  // Don't load until user interaction
  poster="/videos/card-poster.jpg"
  muted
  loop
  playsInline
>
  <source src="/videos/card-720p.webm" type="video/webm" />
  <source src="/videos/card-720p.mp4" type="video/mp4" />
</video>
```

### 8. CDN Delivery
For production, use a CDN like Cloudinary, Bunny CDN, or AWS CloudFront:
- Automatically serves optimized formats based on browser capability
- Handles device-specific resolution delivery
- Includes compression and caching out of the box

### Tools for Video Optimization
- **FFmpeg**: Command-line tool for video conversion
- **Handbrake**: GUI-based video encoder
- **Cloudinary**: Cloud-based video optimization and delivery
- **Mux**: Video streaming platform with automatic optimization

### Monitoring & Testing
1. Use DevTools Network tab to check video file sizes
2. Run Lighthouse audits to verify performance metrics
3. Test on slow 4G connections (Chrome DevTools)
4. Verify videos load without buffering on mobile

---

## Current Implementation Notes
The website currently uses Pexels videos which are:
- ✅ Already compressed and optimized
- ✅ Delivered via CDN globally
- ✅ Cached by browsers and CDN
- ✅ No action needed for current deployment

For self-hosted videos in the future, follow the guidelines above.
