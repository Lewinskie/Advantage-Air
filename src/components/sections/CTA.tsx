export function CTA() {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1772354967311-167285eaa5f5?w=1600&h=700&fit=crop&auto=format"
        alt="Luxury private jet cabin"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(35,31,32,0.85)]" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="section-label mb-6 block">Charter Enquiries</span>
        <h2
          className="font-display font-900 uppercase text-[#F5F3EF] leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Ready to Fly
          <br />
          <span style={{ color: "#D9AD27" }}>on Your Terms?</span>
        </h2>
        <p className="text-[#a8a8a8] max-w-xl mx-auto mb-10 leading-relaxed">
          Our charter operations team is available around the clock to plan and
          execute your flight requirement — from a two-hour domestic hop to a
          transcontinental deployment.
        </p>
        <a href="#contact" className="btn-primary text-sm inline-block">
          Request a Quote
        </a>
      </div>
    </section>
  );
}
