/* globals $ */
import React from 'react';

class Tmp extends React.Component {

  componentDidMount() {
    let ctImg = $('.production img');
    ctImg.wrap('<a href=\'#\' class=\'fancybox\' data-fancybox=\'gallery\'></a>');
    $('.fancybox').parent().addClass('fancyimages');

    let fBox = $('.fancyimages');
    for (let i = 0; i < fBox.length; i++){
      let fN = $('.fancyimages').eq(i).children().length;
      if ((fN % 2) === 1) {
        fBox.eq(i).addClass('odd');
        fBox.eq(i).children(':first').addClass('bigimg');

        // 仅需去除 !sq500 后缀
        let tmpImg = fBox.eq(i).children(':first').children()[0];
        tmpImg.src = tmpImg.src.replace('!sq500', '');
      } else {
        fBox.eq(i).addClass('even');
      }
    }
  }

  render() {
    console.log(this.props);
    const { t1, t2 } = this.props;
    return (
      <div>
        {
          t1 !== '' ? (
            <div className="hb-card-0">
              <h3>Test Part01</h3>
              <div className="content">
                { t1 }
              </div>
            </div>
          ) : null
        }
        {
          t2 && (
            <div className="hb-card-0">
              <h3>Test Part02</h3>
              <div className="content">
                { t2 }
              </div>
            </div>
          )
        }
        <div className="hb-card-0">
          <h3>公告</h3>
          <div className="content">
            <p>报名本期课程的小伙伴，可以将自己的设计作品发送至邮箱huaban.live@qq.com</p>
            <p>APPLE老师将在直播中选取10位小伙伴作品进行修改指导，快来参与~</p>
            <br />
            <p>参与须知</p>
            <p>作品收集时间截止至5月25日中午14:00</p>
            <p>提交作品要求非插画类、非平面类，风格不限，题材不限，图片格式即可</p>
            <p>请将自己的支付订单截图+作品一起发送至huaban.live@qq.com</p>
          </div>
        </div>

        <div className="hb-card-0">
          <h3>课程介绍</h3>
          <div className="content">
            <p><img src="http://hbimg-dev.b0.upaiyun.com/be2a9e03007090a9e1509ad6d8eac6ec29a72856" /></p>
            <p>如今，随便打开一个群都能看到动态表情的身影，站酷的笑z、通达大叔的星座表情包、白茶的吾皇和巴扎嘿......</p>
            <p>那么，一点都一点都不会的萌新该如何完成自己的动态表情包呢？</p>
            <p>如今，随便打开一个群都能看到动态表情的身影，站酷的笑z、通达大叔的星座表情包、白茶的吾皇和巴扎随便打开一个群都能看到动态表情的身影。</p>
          </div>
        </div>

        <div className="hb-card-0">
          <h3>课程大纲</h3>
          <div className="content">
            <p><img src="//hbimg-dev.b0.upaiyun.com/ffac774bc6c6639c9a08b33fe7c0e88dcce0ed2b_/fw/1200/watermark/url/MGY2MzQ2ZmVkZGM2ODZjYzQ1ZjU5NzgyOTQyZDQyYjJiMzcwNGEzOQ==/align/northwest" /></p>
          </div>
        </div>

        <div className="hb-card-0">
          <h3>准备工具</h3>
          <div className="content tools">
            <div className="icon-group">
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
            </div>
            <div className="icon-group">
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
            </div>
            <div className="icon-group">
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
              <i className="ic-software-ps"></i>
            </div>
          </div>
        </div>

        <div className="hb-card-0">
          <h3>讲师作品展示</h3>
          <div className="production">
            <p>
              <img src="http://hbimg-dev.b0.upaiyun.com/be2a9e03007090a9e1509ad6d8eac6ec29a72856" />
              <img src="http://hbimg-dev.b0.upaiyun.com/be2a9e03007090a9e1509ad6d8eac6ec29a72856" />
              <img src="http://hb-prd.b0.upaiyun.com/images/2017/07/9b3a02c7e9a22d2debfa5d2f97b634c7.jpg!sq500" />
              <img src="http://hb-prd.b0.upaiyun.com/images/2017/07/9b3a02c7e9a22d2debfa5d2f97b634c7.jpg!sq500" />
            </p>
            <p>
              <img src="http://hbimg-dev.b0.upaiyun.com/be2a9e03007090a9e1509ad6d8eac6ec29a72856" />
              <img src="http://hb-prd.b0.upaiyun.com/images/2017/07/9b3a02c7e9a22d2debfa5d2f97b634c7.jpg!sq500" />
              <img src="http://hb-prd.b0.upaiyun.com/images/2017/07/9b3a02c7e9a22d2debfa5d2f97b634c7.jpg!sq500" />
            </p>
            <p><img src="http://hb-prd.b0.upaiyun.com/images/2017/07/9b3a02c7e9a22d2debfa5d2f97b634c7.jpg!sq500" /></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tmp;
