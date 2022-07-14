import time

from test_demo import __version__
from selenium import webdriver
import os
from tests.factories.page_factory import PageFactory
from tests.page_objects.abstracts import TodoList
import pytest


@pytest.fixture(autouse=True)
def close_driver(request):
    def close():
        PageFactory.DRIVER.quit()
        PageFactory.DRIVER = None

    request.addfinalizer(close)
    return "request"


def test_checking():
    PageFactory.get(TodoList)


def test_building():
    page = PageFactory.get(TodoList)
    count = len(page.get_items())
    assert count == 0

    page.create_new_item("Hello, world!")

    count = len(page.get_items())
    assert count == 1

    assert page.get_items()[0].get_text() == "Hello, world!"


def test_status():
    page = PageFactory.get(TodoList)
    count = len(page.get_items())
    assert count == 0

    page.create_new_item("Hello, world!")

    item = page.get_items()[0]
    assert not item.is_done()

    item.change_status()
    assert item.is_done()
