# 8.1-8.5代码训练

## 学习过程：
1.看b站视频学习vue2。<br />
2.看b站视频学习vue3。<br />
3.用vue3敲代码，用上上一周后端接口，前端页面有：<br />
 * login：登录/注册 <br />
 * home：主页面 <br />
 * students：显示所有学生的信息/模糊搜索学生 <br />
 * add：添加学生信息 <br />
 * deletestu：删除某条学生信息 <br />
 * update：更新学生信息 <br />
 * users：显示所有用户的信息/模糊搜索用户 <br />

## 运行截图
### nginx部署
nginx起在8085端口： <br />
<img width="345" alt="截屏2022-08-04 11 29 23" src="https://user-images.githubusercontent.com/44705882/182756931-61f612a0-4362-4524-aa07-dd7b57887d12.png"> <br />
### 前端
登录页面： <br />
<img width="1440" alt="截屏2022-08-04 11 14 35" src="https://user-images.githubusercontent.com/44705882/182755260-0f749f5f-7216-4cdb-9255-4096d17bb1c9.png"> <br />
设置提示用户名的密码不能为空： <br />
<img width="1440" alt="截屏2022-08-04 11 14 29" src="https://user-images.githubusercontent.com/44705882/182755246-04c8d397-6dfe-4a2d-b5a0-80fa6b6036e2.png"> <br />
密码隐藏，也可以点击显示： <br />
<img width="1440" alt="截屏2022-08-04 11 15 14" src="https://user-images.githubusercontent.com/44705882/182755323-480bd583-eaac-4769-836f-c0d0e84b5cf4.png"> <br />
<img width="1440" alt="截屏2022-08-04 11 15 18" src="https://user-images.githubusercontent.com/44705882/182755333-9edf8bec-883a-4425-992b-d6e43580594c.png"> <br />
注册时用户名已存在会报错： <br />
<img width="1440" alt="截屏2022-08-04 11 15 43" src="https://user-images.githubusercontent.com/44705882/182755412-9ad3352a-26dc-4bdf-9c50-709b870f11be.png"> <br />
注册成功： <br />
<img width="1440" alt="截屏2022-08-04 11 15 53" src="https://user-images.githubusercontent.com/44705882/182755432-909a5fe6-42cf-4ecc-b082-90651a2ce82a.png"> <br />
登录成功： <br />
<img width="1440" alt="截屏2022-08-04 11 16 03" src="https://user-images.githubusercontent.com/44705882/182755440-1536a431-e7ba-40bb-b415-7d817b3d86c1.png"> <br />
登录用户名或密码错误： <br />
<img width="1440" alt="截屏2022-08-04 11 17 11" src="https://user-images.githubusercontent.com/44705882/182755528-ddf7a765-9587-4e51-9691-d3d910e3400d.png"> <br />
导航栏，点击home可以回到主页： <br />
<img width="1439" alt="截屏2022-08-04 11 18 05" src="https://user-images.githubusercontent.com/44705882/182755627-7c850fd3-d402-47e7-ad88-44d072137753.png"> <br />
头像下拉菜单： <br />
<img width="92" alt="截屏2022-08-04 11 18 36" src="https://user-images.githubusercontent.com/44705882/182755698-44f52fe5-3d87-4652-9f04-01fb15dfd333.png"> <br />
显示所有学生信息： <br />
<img width="1440" alt="截屏2022-08-04 11 17 50" src="https://user-images.githubusercontent.com/44705882/182755731-bb50c8d8-9227-4feb-90ea-4aef49d50ae1.png"> <br />
模糊搜索带有“小”字的学生： <br />
<img width="1440" alt="截屏2022-08-04 11 19 45" src="https://user-images.githubusercontent.com/44705882/182755831-cf7bbb37-25d2-47f9-9f42-676b053dfe1f.png"> <br />
添加学生信息： <br />
<img width="1440" alt="截屏2022-08-04 11 20 40" src="https://user-images.githubusercontent.com/44705882/182755925-0981e2b3-63f8-49c7-9574-f255aa3ee59e.png"> <br />
提示添加成功： <br />
<img width="1440" alt="截屏2022-08-04 11 21 07" src="https://user-images.githubusercontent.com/44705882/182756030-b27399b6-dc5c-4425-8b7b-1c4f9e67b7c2.png"> <br />
可以在全体学生中看到刚刚添加的信息： <br />
<img width="1440" alt="截屏2022-08-04 11 21 37" src="https://user-images.githubusercontent.com/44705882/182756105-2c68b8bc-433a-42dd-94e0-e7dbe7930037.png"> <br />
删除学生信息页面： <br />
<img width="1440" alt="截屏2022-08-04 11 22 42" src="https://user-images.githubusercontent.com/44705882/182756175-860b515a-c738-4bc5-b430-4beaa0bfa40c.png"> <br />
点击按钮删除最后一名学生： <br />
<img width="1440" alt="截屏2022-08-04 11 22 47" src="https://user-images.githubusercontent.com/44705882/182756235-bad6471d-150a-4e4e-8ecd-4547901abd86.png"> <br />
再次查看，已经删除： <br />
<img width="1440" alt="截屏2022-08-04 11 22 52" src="https://user-images.githubusercontent.com/44705882/182756284-dd298a9a-bd5a-4a56-b787-c16355bc8900.png"> <br />
修改学生信息页面： <br />
<img width="1440" alt="截屏2022-08-04 11 23 59" src="https://user-images.githubusercontent.com/44705882/182756438-e05430ab-d132-4027-bf4e-e4ce13c0bbac.png"> <br />
修改信息框： <br />
<img width="1440" alt="截屏2022-08-04 11 24 05" src="https://user-images.githubusercontent.com/44705882/182756465-49e88cdc-db9f-4e7e-a001-cc486936d920.png"> <br />
修改数学成绩： <br />
<img width="573" alt="截屏2022-08-04 11 24 32" src="https://user-images.githubusercontent.com/44705882/182756366-d24e3b80-2f1f-451c-88b6-8b6ffea423e4.png"> <br />
已修改： <br />
<img width="1194" alt="截屏2022-08-04 11 24 53" src="https://user-images.githubusercontent.com/44705882/182756412-d9b4ddb0-96b2-465c-b037-ad59ab5406d8.png"> <br />
显示所有用户： <br />
<img width="1440" alt="截屏2022-08-04 11 25 38" src="https://user-images.githubusercontent.com/44705882/182756506-9907b7e5-5e83-4c92-b838-b618daac4b84.png"> <br />
搜索带有'stu'的用户： <br />
<img width="856" alt="截屏2022-08-04 11 26 24" src="https://user-images.githubusercontent.com/44705882/182756566-f257c1cc-a1cf-4779-94b5-853299752794.png"> <br />
点击退出系统： <br />
<img width="1440" alt="截屏2022-08-04 11 26 38" src="https://user-images.githubusercontent.com/44705882/182756603-d760e079-e86d-476c-a9b0-5be1bbf4f3c1.png"> <br />
未登录时没有缓存内容： <br />
<img width="1440" alt="截屏2022-08-04 11 27 26" src="https://user-images.githubusercontent.com/44705882/182756698-7c43cab4-dc70-4099-9393-6c60c612625b.png"> <br />
登录后储存信息： <br />
<img width="1440" alt="截屏2022-08-04 11 27 57" src="https://user-images.githubusercontent.com/44705882/182756781-94592a4a-d1c7-46d9-9e4d-6ef11dc6cd08.png"> <br />
点击退出后清空缓存： <br />
<img width="1440" alt="截屏2022-08-04 11 28 37" src="https://user-images.githubusercontent.com/44705882/182756860-ad09c011-cf9c-48ff-9e4b-7463eb4a2827.png"> <br />
