from tests.registers.page_objects_register import PageObjectsRegister
from tests.configuration import Configuration
from selenium import webdriver
import os
from tests.page_objects import *
import time


class PageFactory:
    DRIVER = None

    @staticmethod
    def get(page_class, *args, **kwargs):
        if Configuration.MODE == "FIRST":
            current_page_class = PageObjectsRegister.implementations["first"][page_class]
        else:
            current_page_class = PageObjectsRegister.implementations["second"][page_class]

        if PageFactory.DRIVER is None:
            PageFactory.DRIVER = webdriver.Firefox(executable_path=os.path.abspath("./../geckodriver"))
            PageFactory.DRIVER.get(Configuration.HOST)

        result = current_page_class(PageFactory.DRIVER, *args, **kwargs)
        result.check_page()
        return result

