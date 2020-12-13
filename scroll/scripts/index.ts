class Anime {
  constructor(
    private selector: string,
    private animation: string,
    private duration: number
  ) {}

  anime(): void {
    let element: Element | null = document.querySelector(`.${this.selector}`);
    if (element) {
      element.addEventListener("animationend", () => {
        element.classList.remove(this.animation);
        setTimeout(() => element.classList.add(this.animation), this.duration);
      });
    }
  }
}
