import "expect-puppeteer";

describe("Heading", () => {
  it("matches snapshot", async () => {
    await page.goto(
      "http://localhost:8080/iframe.html?selectedKind=Heading&selectedStory=text"
    );
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
