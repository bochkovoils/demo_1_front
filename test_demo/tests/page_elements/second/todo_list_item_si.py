from tests.page_elements.abstracts import TodoListItem
from selenium.webdriver.common.by import By


class TodoListItemSecondImpl(TodoListItem):


    def __init__(self, driver, element):
        super().__init__(driver, element)

    def change_status(self):
        elem = self.element.find_element(By.CSS_SELECTOR, " img ")
        elem.click()

    def is_done(self):
        elem = self.element.find_element(By.CSS_SELECTOR, " img ")
        name = elem.get_attribute("src").strip("/.,*").split("/")[-1].split(".")[0]
        if name == "check":
            return True
        elif name == "play":
            return False
        else:
            raise 1

    def get_text(self):
        return self.element.find_element(By.CSS_SELECTOR, " p ").text
