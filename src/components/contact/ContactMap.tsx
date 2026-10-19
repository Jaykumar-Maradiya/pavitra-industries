'use client';

export function ContactMap() {
  return (
    <section className="w-full h-80 sm:h-96 md:h-[450px] border-t border-neutral-300 bg-neutral-100 overflow-hidden relative">
      <iframe
        loading="lazy"
        className="w-full h-full border-0 grayscale contrast-125"
        src="https://maps.google.com/maps?q=%E2%80%9CPavitra%20Industries%20%E2%80%93%20Vibration%20%26%20Induction%20Motors%E2%80%9D%2C%202MF2%2B925%2C%2017%2C%20G%20I%20D%20C%20Industrial%20Area%2C%20Odhav%2C%20Ahmedabad%2C%20Gujarat%20380038&t=m&z=14&output=embed&iwloc=near"
        title="Pavitra Industries – Vibration & Induction Motors Location"
        aria-label="Pavitra Industries – Vibration & Induction Motors Location Map"
      />
    </section>
  );
}
