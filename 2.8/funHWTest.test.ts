import { Google } from './funHWPage';
const fs = require('fs');
const gMan = new Google();

test("do a search", async () => {
    await Google.navigate();
    await Google.search("Star Wars: Jedi Survivor");
    let text = await Google.getResults();
    expect(text).toContain("Star Wars: Jedi Survivor")
    await fs.writeFile(`${__dirname}/jediscreenshot.png`,
    await google.driver.takeScreenshot(), "base64",)

})