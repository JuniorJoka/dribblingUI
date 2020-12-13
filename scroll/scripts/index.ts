class Anime {
  constructor(
    private selector: string,
    private animation: string,
    private duration: number
  ) {}

  anime(): void {
    const element: Element | null = document.querySelector(`.${this.selector}`);
    if (element) {
      element.addEventListener("animationend", () => {
        if (element) {
          element.classList.remove(this.animation);
          setTimeout(
            () => element.classList.add(this.animation),
            this.duration
          );
        }
      });
    }
  }
}

const ad1 = new Anime("ad1", "moveRight", 2000);
ad1.anime();

const ad2 = new Anime("ad2", "moveDown", 2000);
ad2.anime();

const ad3 = new Anime("ad3", "moveDown", 2000);
ad3.anime();

const ad4 = new Anime("ad4", "moveLeft", 2000);
ad4.anime();

const ad5 = new Anime("ad5", "moveUp", 2000);
ad5.anime();

const ad6 = new Anime("ad6", "moveLeft", 2000);
ad6.anime();

const news1 = new Anime("first", "showShow", 2000);
news1.anime();

const news2 = new Anime("second", "showDown", 2000);
news2.anime();

const news3 = new Anime("third", "showUp", 2000);
news3.anime();

const news4 = new Anime("fourth", "elongate", 2000);
news4.anime();
