import { useState } from "react";

import {
  DEFAULT_PHOTOS,
  GALLERY_CATEGORIES,
  type GalleryPhoto,
} from "../../data/siteData";

export function Gallery() {
  const photos = DEFAULT_PHOTOS;
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);

  const visible =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="bg-[#231F20] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="section-label mb-4 block">
              Operations in Action
            </span>
            <h2
              className="font-display font-800 uppercase text-[#F5F3EF] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              On the Ground,
              <br />
              In the Air
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="font-mono-data text-[0.65rem] tracking-widest uppercase px-3 py-2 border transition-colors"
              style={{
                borderColor:
                  filter === cat ? "#D9AD27" : "rgba(217,173,39,0.2)",
                color: filter === cat ? "#D9AD27" : "#7C7C7C",
                background:
                  filter === cat ? "rgba(217,173,39,0.08)" : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {visible.map((photo, i) => (
            <div
              key={photo.id}
              className="relative group break-inside-avoid overflow-hidden cursor-pointer border border-[rgba(217,173,39,0.1)] hover:border-[rgba(217,173,39,0.4)] transition-colors"
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: i % 3 === 1 ? "4/5" : "4/3" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(35,31,32,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27] mb-1">
                  {photo.category}
                </div>
                <div className="font-display font-600 text-[#F5F3EF] text-sm">
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[rgba(35,31,32,0.97)]"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-[#7C7C7C] hover:text-[#D9AD27] text-4xl transition-colors z-10">
            ×
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url.replace("w=800", "w=1400")}
              alt={lightbox.caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 flex items-center gap-4">
              <span className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#871B1A]">
                {lightbox.category}
              </span>
              <span className="font-display font-600 text-[#F5F3EF] text-lg">
                {lightbox.caption}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
