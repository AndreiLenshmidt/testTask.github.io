const imgSelector = document.querySelector("#main-bkg");
const currentTimeInterval = new Date(Date.now()).getHours();

export function setBackground() {
  if (currentTimeInterval < 6) {
    setBackgroundImage(imgSelector, "wrapper-bkg1");
  } else if (currentTimeInterval < 12 && currentTimeInterval > 6) {
    setBackgroundImage(imgSelector, "wrapper-bkg2");
  } else if (currentTimeInterval < 18 && currentTimeInterval > 12) {
    setBackgroundImage(imgSelector, "wrapper-bkg3");
  } else {
    setBackgroundImage(imgSelector, "wrapper-bkg4");
  }
}

const setBackgroundImage = (selector, bkg) => {
  selector.className = `wrap ${bkg}`;
};
