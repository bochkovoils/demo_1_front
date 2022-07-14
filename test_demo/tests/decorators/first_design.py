from tests.registers.page_objects_register import PageObjectsRegister


def first_design(cls):
    if "first" not in PageObjectsRegister.implementations:
        PageObjectsRegister.implementations["first"] = {}
    base = [parent for parent in cls.__bases__ if parent in PageObjectsRegister.abstractions][0]
    PageObjectsRegister.implementations["first"][base] = cls
    return cls
