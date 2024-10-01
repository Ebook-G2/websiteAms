import { useEffect, useRef } from 'react';

const Cards = () => {
  const cardsContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;
    const cards = Array.from(cardsContainer.querySelectorAll('.card'));

    const applyOverlayMask = (e) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const createOverlayCta = (overlayCard, ctaEl) => {
      const overlayCta = document.createElement('div');
      overlayCta.classList.add('cta');
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute('aria-hidden', true);
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          overlay.children[cardIndex].style.width = `${width}px`;
          overlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement('div');
      overlayCard.classList.add('card');
      createOverlayCta(overlayCard, cardEl.lastElementChild);
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener('pointermove', applyOverlayMask);

    return () => {
      document.body.removeEventListener('pointermove', applyOverlayMask);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-10" ref={cardsContainerRef}>
        <div className="flex-1 min-w-[14rem] p-6 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg grid gap-5 card">
          <h2 className="text-xl font-semibold">Basic</h2>
          <p className="text-2xl font-bold">$9.99</p>
          <ul className="space-y-2">
            <li className="before:content-['✔'] before:mr-2">Access to standard workouts and nutrition plans</li>
            <li className="before:content-['✔'] before:mr-2">Email support</li>
          </ul>
          <a href="#basic" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded text-center cta">Get Started</a>
        </div>
  
        <div className="flex-1 min-w-[14rem] p-6 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg grid gap-5 card">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="text-2xl font-bold">$19.99</p>
          <ul className="space-y-2">
            <li className="before:content-['✔'] before:mr-2">Access to advanced workouts and nutrition plans</li>
            <li className="before:content-['✔'] before:mr-2">Priority Email support</li>
            <li className="before:content-['✔'] before:mr-2">Exclusive access to live Q&A sessions</li>
          </ul>
          <a href="#pro" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded text-center cta">Upgrade to Pro</a>
        </div>
  
        <div className="flex-1 min-w-[14rem] p-6 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg grid gap-5 card">
          <h2 className="text-xl font-semibold">Ultimate</h2>
          <p className="text-2xl font-bold">$29.99</p>
          <ul className="space-y-2">
            <li className="before:content-['✔'] before:mr-2">Access to all premium workouts and nutrition plans</li>
            <li className="before:content-['✔'] before:mr-2">24/7 Priority support</li>
            <li className="before:content-['✔'] before:mr-2">1-on-1 virtual coaching session every month</li>
            <li className="before:content-['✔'] before:mr-2">Exclusive content and early access to new features</li>
          </ul>
          <a href="#ultimate" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded text-center cta">Go Ultimate</a>
        </div>
      </div>
  
      <div className="overlay absolute inset-0" ref={overlayRef}></div>
    </div>
  );
};

export default Cards;
