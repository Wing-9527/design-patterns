enum BasicNodeTypeEnum {
  IMAGE = "image",
  PDF = "pdf",
  TXT = "txt",
  FOLDER = "folder",
}

interface BasicNode {
  name: string;
  type: BasicNodeTypeEnum;
  add(file: BasicNode): BasicNode;
  find(string: string): BasicNode | null;
}

class BasicFile implements BasicNode {
  public name: string;
  public type: BasicNodeTypeEnum;
  constructor(name: string, type: BasicNodeTypeEnum) {
    this.name = name;
    this.type = type;
  }
  add(file: BasicFile): BasicFile {
    // @ts-ignore
    console.log("File 类型不支持添加");
    return this;
  }
  find(name: string): BasicFile | null {
    return this.name === name ? this : null;
  }
}

class BasicFolder implements BasicNode {
  public name: string;
  public type: BasicNodeTypeEnum;
  public children: (BasicFile | BasicFolder)[] = [];
  constructor(name: string, type: BasicNodeTypeEnum) {
    this.name = name;
    this.type = type;
  }
  add(file: BasicNode): BasicFolder {
    this.children.push(file);
    return this;
  }
  find(name: string): BasicNode | null {
    let result: BasicNode | null = null;
    if (this.name === name) {
      result = this;
    } else {
      this.children.forEach((item) => {
        // 递归查找
        let node = item.find(name);
        if (node && node.name === name) {
          result = node;
        }
      });
    }
    return result;
  }
}

let rootFolder = new BasicFolder("根文件夹", BasicNodeTypeEnum.FOLDER);
let img1 = new BasicFile("1.jpg", BasicNodeTypeEnum.IMAGE);
let txt1 = new BasicFile("1.txt", BasicNodeTypeEnum.TXT);

let folder2 = new BasicFolder("文件夹2", BasicNodeTypeEnum.FOLDER);
let img2 = new BasicFile("2.jpg", BasicNodeTypeEnum.IMAGE);
let txt2 = new BasicFile("2.txt", BasicNodeTypeEnum.TXT);

let folder3 = new BasicFolder("文件夹3", BasicNodeTypeEnum.FOLDER);
let img3 = new BasicFile("3.jpg", BasicNodeTypeEnum.IMAGE);
let txt3 = new BasicFile("3.txt", BasicNodeTypeEnum.TXT);

folder3.add(img3);
folder3.add(txt3);

folder2.add(img2);
folder2.add(txt2);
folder2.add(folder3);

rootFolder.add(img1);
rootFolder.add(txt1);
rootFolder.add(folder2);

let target = rootFolder.find("3.txt");
// @ts-ignore
console.log(target);
