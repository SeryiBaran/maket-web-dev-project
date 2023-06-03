import { KeenSliderInstance } from 'keen-slider';

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export function navigation(slider: KeenSliderInstance) {
  let wrapper: HTMLElement,
    dots: HTMLElement,
    arrowLeft: HTMLElement,
    arrowRight: HTMLElement;

  function markup(remove?: boolean) {
    wrapperMarkup(remove);
    dotMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment: HTMLElement) {
    assert(elment.parentNode !== null);
    elment.parentNode.removeChild(elment);
  }
  function createDiv(className: string) {
    const div = document.createElement('div');
    const classNames = className.split(' ');
    classNames.forEach((name: string) => div.classList.add(name));
    return div;
  }

  function arrowMarkup(remove?: boolean) {
    if (remove) {
      removeElement(arrowLeft);
      removeElement(arrowRight);
      return;
    }
    arrowLeft = createDiv('arrow arrow--left');
    arrowLeft.addEventListener('click', () => slider.prev());
    arrowRight = createDiv('arrow arrow--right');
    arrowRight.addEventListener('click', () => slider.next());

    wrapper.appendChild(arrowLeft);
    wrapper.appendChild(arrowRight);
  }

  function wrapperMarkup(remove?: boolean) {
    if (remove) {
      const parent = wrapper.parentNode;
      assert(parent !== null);
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper);
      removeElement(wrapper);
      return;
    }
    wrapper = createDiv('navigation-wrapper');
    assert(slider.container.parentNode !== null);
    slider.container.parentNode.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function dotMarkup(remove?: boolean) {
    if (remove) {
      removeElement(dots);
      return;
    }
    dots = createDiv('dots');
    slider.track.details.slides.forEach((_e, idx) => {
      if (idx <= slider.track.details.maxIdx) {
        const dot = createDiv('dot');
        dot.addEventListener('click', () => slider.moveToIdx(idx));
        dots.appendChild(dot);
      }
    });
    wrapper.appendChild(dots);
  }

  function updateClasses() {
    const slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add('arrow--disabled')
      : arrowLeft.classList.remove('arrow--disabled');
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add('arrow--disabled')
      : arrowRight.classList.remove('arrow--disabled');
    Array.from(dots.children).forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add('dot--active')
        : dot.classList.remove('dot--active');
    });
  }

  slider.on('created', () => {
    markup();
    updateClasses();
  });
  slider.on('optionsChanged', () => {
    markup(true);
    markup();
    updateClasses();
  });
  slider.on('slideChanged', () => {
    updateClasses();
  });
  slider.on('destroyed', () => {
    markup(true);
  });
}

export function autoSwitch(slider: KeenSliderInstance) {
  let timeout: number;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      if (slider.track.details.rel >= slider.track.details.maxIdx)
        slider.moveToIdx(0);
      else slider.next();
    }, 2000);
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}
