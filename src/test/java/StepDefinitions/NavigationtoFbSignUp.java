package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NavigationtoFbSignUp {
	
	public WebDriver driver;
	
@Given("^User has already opened the browser window$")
public void user_has_already_opened_the_browser_window() {
    // Initiate chrome browser
	String path = System.getProperty("user.dir");
	System.setProperty("webdriver.chrome.driver",path+"\\src\\test\\java\\chromedriver.exe");
	ChromeOptions options = new ChromeOptions();
	options.addArguments("--disable-notifications");
	
	//Created an object of driver
	driver = new ChromeDriver(options);
}

@When("^Browser is visible to user$")
public void browser_is_visible_to_user() {
    // Once chrome is launched,make it full screen
	driver.manage().window().maximize();
}

@Then("^Enter the url and press enter$")
public void enter_the_url_and_press_enter(){
    // Enter the url of the website which needs to be navigated
	driver.get("https://www.facebook.com/");
	//Wait for 10 seconds to load the page
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

}

@Then("^Signup page of facebook should appear$")
public void signup_page_of_facebook_should_appear() {
    // Verify the page title to make sure that we are on correct page
	String title = driver.getTitle();
	Assert.assertEquals("Facebook – log in or sign up", title);

}

@Then("^Enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" in SignUpform$")
public void enter_in_SignUpform(String firstname, String lastname, String emailaddress, String password, String gender,String dateofbirth) {
    // Enter the data of the user from the table in feature into relevant fields for submission
	
	driver.findElement(By.xpath("//input[@name ='firstname']")).clear();
	driver.findElement(By.xpath("//input[@name ='firstname']")).sendKeys(firstname);
	
	driver.findElement(By.xpath("//input[@name ='lastname']")).clear();
	driver.findElement(By.xpath("//input[@name ='lastname']")).sendKeys(lastname);
	
	driver.findElement(By.xpath("//input[@name ='reg_email__']")).clear();
	driver.findElement(By.xpath("//input[@name ='reg_email__']")).sendKeys(emailaddress);
	
	driver.findElement(By.xpath("//input[@name ='reg_email_confirmation__']")).clear();
	driver.findElement(By.xpath("//input[@name ='reg_email_confirmation__']")).sendKeys(emailaddress);
	
	driver.findElement(By.xpath("//input[@name ='reg_passwd__']")).clear();
	driver.findElement(By.xpath("//input[@name ='reg_passwd__']")).sendKeys(password);
	
	//Select Month ,Date and Year
	
	String day_value = dateofbirth.substring(0, 2);
	String month_value = dateofbirth.substring(3, 6);
	String year_value = dateofbirth.substring(7, 11);

	Select month = new Select(driver.findElement(By.xpath("//select[@id='month']")));
	month.selectByVisibleText(month_value);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	Select day = new Select(driver.findElement(By.xpath("//select[@id='day']")));
	day.selectByVisibleText(day_value);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	Select year = new Select(driver.findElement(By.xpath("//select[@id='year']")));
	year.selectByVisibleText(year_value);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
	if (gender.equals("Male"))
		driver.findElement(By.xpath("//label[contains(text(),'Male')]")).click();
	
	if (gender.equals("Female"))
		driver.findElement(By.xpath("//label[contains(text(),'Female')]")).click();
					
}

@Then("^I click \"([^\"]*)\"$")
public void i_click(String buttontext) {
    // Click on button having the buttontext

	driver.findElement(By.xpath("//button[contains(text(),buttontext)]")).click();
	
}

@Then("^I should see header \"([^\"]*)\"$")
public void i_should_see_header(String headertext) {
    // Verify that header is present in the page
	try {
	//Wait for element to be visible then verify header
	WebDriverWait wait = new WebDriverWait(driver, 15);     
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h2[contains(text(),'Confirm your email address')]")));
	}
	finally {
	//Close browser
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	driver.quit();
	}
	
}

}
	

