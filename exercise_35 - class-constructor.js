/*
Game Classes
You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created.

-Initialize the Monster's health to 100.
-The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster*/

// สร้าง constructor ของ Monster โดยรับ options เพื่อกำหนดค่าเริ่มต้นให้กับ instance ของ Monster หรือ construce คือ function ที่ถูกเรียกเมื่อสร้างคลาสนี้เป็น instance โดยใช้ new
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}
