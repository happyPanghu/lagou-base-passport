# lagou-mds-passport


用于同步拉勾登陆信息

## Install

```a
npm install --save-dev lagou-base-passport
```

## Usage


```js
import passport from 'lagou-base-passport'

// 调用passport 并使用回调函数
passport(function() {
   window.location.reload();
})
 
```


## API


### .createPassportScript(fun)

##### options.fun

Type: `Function`<br>

创建passport的script标签，并设置完成时的触发

### .initPassport(fun)

##### options.fun

Type: `Function`<br>

初始化 passport  




#History Record        

| 版本 | 日志 | 时间|
| ------ | ------ | ------ |
| v1.0.0 | 拉勾passport第一版 | 2019-04-15 |
| v1.0.1 | 正式编辑passport业务逻辑 | 2019-04-15 |