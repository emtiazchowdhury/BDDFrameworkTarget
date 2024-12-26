package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class homepageStepDefinition {

	WebDriver driver;
	String title;

	
	
	@Given("^User navigates to Target Home page$")
	public void user_navigates_to_Target_Home_page() {
		System.setProperty("webdriver.chrome.driver", "C://Automation//chromedriver-win64//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.target.com/");
	}

	@When("^User capture the pagetitle$")
	public void User_capture_the_pagetitle() {
		 title = driver.getTitle();
		System.out.println("Your page title is: "+title);
	}

	@Then("^User should be able to verify the correct pagetitle$")
	public void user_should_be_able_to_verify_the_correct_pagetitle(){
		Assert.assertEquals("Target : Expect More. Pay Less.", title);
	}

	@Then("^User should be able to close the browser$")
	public void userShouldBeAbleToCloseTheBrowser() {
		driver.quit();
	}

	@When("User enter \"(.*)\" and click search button")
	public void userEnterItemNameAndClickSearchButton(String item) {
		driver.findElement(By.id("search")).sendKeys(item);
		driver.findElement(By.xpath("//*[@type='submit']")).click();
	}

	@Then("User should be able to see a list of items")
	public void userShouldBeAbleToSeeAListOfItems() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='h-margin-r-x1']")));
		String searchresult = driver.findElement(By.xpath("//span[@class='h-margin-r-x1']")).getText();
		if (searchresult.contains("results")){
			System.out.println("Pass");
		}else {
			System.out.println("Fail");
		}
	}

}
