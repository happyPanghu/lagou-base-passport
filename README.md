# lagou-mds-lgSa 


用于同步拉勾登陆信息

## Install

```a
npm install --save-dev lagou-base-passport
```

## Usage


```js
import lgSa from 'lagou-base-passport'
 
```


## API


### .track(event, actions)

##### options.event

Type: `String`<br>

##### options.actions
params:

    主要参数：
    address_id: 日志id
    content_id: 内容
    其他参数 会合并到 click_props，如：
       position_id: this.props.curPosition.positionId,
       page_number: 1
       c_id_list: ids,
       from: locationOpts.get('tab') || 'rec',
       action: 'click'
            
Type: `Object`<br>

`本平台`埋点上传





#History Record        

| 版本 | 日志 | 时间|
| ------ | ------ | ------ |
| v1.0.0 | 拉勾passport第一版 | 2019-04-15 |