const chai                          = require('chai');
const expect                        = chai.expect;
const {Builder, By, Capabilities}   = require('selenium-webdriver');

const caps = new Capabilities();
caps.setPageLoadStrategy("normal");

let driver;

describe('Login feature', function(){
    this.timeout(30000);
    it("Some test here", async function(){
        try {
            driver = await new Builder().
                withCapabilities(caps).
                forBrowser('chrome').
                // usingServer('http://selenium_chrome:4444/wd/hub').
                build();
    
            // Navigate to Url
            await driver.get("http://localhost:3000");
            // let message = await driver.findElement(By.id("title")).getText();
            // console.log("The message is", message);
            // expect(message).to.equal('Hello Docker');

            let email = await driver.findElement(By.id("email"));
            await email.click();
            await email.sendKeys("testuser@test.com")

            let password = await driver.findElement(By.id("password"));
            await password.click();
            await password.sendKeys("password123");

            await driver.findElement(By.id("login_button")).click();
            await driver.sleep(1000);
            await driver.navigate().refresh();

            let h1_element = await driver.findElement(By.css("h1")).getText();
            // console.log(h1_element)
            expect(h1_element).to.equal('Hello, Anthony Dillahunty!')



        } catch (e) {
            console.log(e);
            throw new Error("error");
        } finally {
            if(driver){
                await driver.quit();
            }
        }        
    })
});