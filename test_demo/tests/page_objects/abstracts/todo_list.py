from tests.decorators import page_object
from abc import abstractmethod
from selenium.webdriver.common.by import By


@page_object("todo list")
class TodoList:

    def item_locator(self):
        return By.CSS_SELECTOR, "div.TodoListItem"

    def __init__(self, driver, *args, **kwargs):
        self.driver = driver

    def check_page(self):
        print("Проверка нахождения на странице todo list'а")
        self.driver.find_element(By.XPATH, ".//*[.='Todo List']")

    @abstractmethod
    def create_new_item(self, text):
        pass

    @abstractmethod
    def get_items(self):
        pass
