<template>
	<transition name="slide">
		<div class="recommendFollow">
			<recommendFollow-header :featureText="recommendFollowText"></recommendFollow-header>
			<div class="recommend-follow-search">
				<input placeholder="搜索简书的内容和朋友"/>
			</div>
			<div class="recommend-follow-category">
				<div class="recommend-follow-category-single">
					<span class="recommend-follow-category-single-icon">
						<img src="../../../../images/follow/author.png">
					</span>
					<span class="recommend-follow-category-single-text">推荐作者</span>
				</div>
				<div class="recommend-follow-category-single">
					<span class="recommend-follow-category-single-icon">
						<img src="../../../../images/follow/topic.png">
					</span>
					<span class="recommend-follow-category-single-text">推荐专题</span>
				</div>
				<div class="recommend-follow-category-single">
					<span class="recommend-follow-category-single-icon">
						<img src="../../../../images/follow/wx.png">
					</span>
					<span class="recommend-follow-category-single-text">添加微信好友</span>
				</div>
				<div class="recommend-follow-category-single">
					<span class="recommend-follow-category-single-icon">
						<img src="../../../../images/follow/qq.png">
					</span>
					<span class="recommend-follow-category-single-text">添加QQ好友</span>
				</div>
			</div>
			<div class="recommend-follow-content">
				<ul>
					<li>
						<div class="recommend-follow-author-related">我是大帅哥 关注了作者</div>
						<div class="recommend-follow-author-description">
							<span class="recommend-follow-author-avator">
								<img src="http://upload.jianshu.io/users/upload_avatars/1767483/6321b54d19be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64">
							</span>
							<span class="recommend-follow-author-name">虎仔在</span>
							<span class="recommend-follow-author-follow">+关注</span>
						</div>
						<div class="recommend-follow-author-intro">
							<span class="recommend-follow-author-intro-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
						<div class="recommend-follow-author-digest">
							<span class="recommend-follow-author-digest-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
					</li>
					<li>
						<div class="recommend-follow-author-related">我是大帅哥 关注了作者</div>
						<div class="recommend-follow-author-description">
							<span class="recommend-follow-author-avator">
								<img src="http://upload.jianshu.io/users/upload_avatars/1767483/6321b54d19be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64">
							</span>
							<span class="recommend-follow-author-name">虎仔在</span>
							<span class="recommend-follow-author-follow">+关注</span>
						</div>
						<div class="recommend-follow-author-intro">
							<span class="recommend-follow-author-intro-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
						<div class="recommend-follow-author-digest">
							<span class="recommend-follow-author-digest-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
					</li>
					<li>
						<div class="recommend-follow-author-related">我是大帅哥 关注了作者</div>
						<div class="recommend-follow-author-description">
							<span class="recommend-follow-author-avator">
								<img src="http://upload.jianshu.io/users/upload_avatars/1767483/6321b54d19be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64">
							</span>
							<span class="recommend-follow-author-name">虎仔在</span>
							<span class="recommend-follow-author-follow">+关注</span>
						</div>
						<div class="recommend-follow-author-intro">
							<span class="recommend-follow-author-intro-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
						<div class="recommend-follow-author-digest">
							<span class="recommend-follow-author-digest-text">奥卡福话唠位哦啊是佛您是否就开房记录时间佛网IE合同位规划开始的离开房间爱上 </span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>
import recommendFollowHeader from "../common/featureHeader.vue"
export default{
  data(){
    return{
      recommendFollowText:"推荐关注",
    }
  },
  components:{
    recommendFollowHeader:recommendFollowHeader
  }
}
</script>
<style>
.recommendFollow{width: 750px;position: fixed;top: 0;left: 0;bottom: 0;z-index: 20;background-color: #f6f6f6;overflow-y: auto;}
.recommend-follow-search{height: 96px;width: 750px;text-align: center;margin-top: 90px;background-color: white}
.recommend-follow-search input{height: 73px;width: 690px;display: inline-block;margin-top: 10px;border: 1px solid #ccc;outline: none;
border-radius: 36px;font-size: 30px;box-sizing: border-box;padding-left: 15px;text-align: center;line-height: 73px}
.recommend-follow-category{height: 190px;width: 750px;display: flex;box-sizing: border-box;padding-top: 42px;padding-bottom: 32px;
border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;background-color: white}
.recommend-follow-category-single{flex:1;text-align: center;}
.recommend-follow-category-single-icon{height: 62px;width: auto;display: inline-block;}
.recommend-follow-category-single-icon img{height: 62px;width: auto}
.recommend-follow-category-single-text{height: 54px;width: 100%;display: inline-block;line-height: 54px;text-align: center;font-size: 28px;color: #999}
.recommend-follow-content{margin-top:37px;width: 750px;}
.recommend-follow-content ul{width: 750px}
.recommend-follow-content ul li{width: 750px;height: auto;border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;background-color: white;margin-bottom: 40px}
.recommend-follow-author-related{height: 85px;width: 690px;border-bottom: 1px solid #ccc;line-height: 85px;font-size: 25px;text-align: left;margin:0 auto; color: #878787}
.recommend-follow-author-description{height: 80px;width: 690px;margin:0 auto;margin-top: 39px}
.recommend-follow-author-avator{height: 80px;width: 80px;display: inline-block;border-radius: 50%;overflow: hidden;float: left;}
.recommend-follow-author-avator img{height: 80px;width: 80px;}
.recommend-follow-author-name{height: 80px;width: auto;display: inline-block;float: left;text-align: left;line-height: 80px;font-size: 28px;margin-left: 20px}
.recommend-follow-author-follow{height: 60px;width: 140px;text-align: center;line-height: 60px;background-color: #48bd38;color: white;margin-top: 10px;display: inline-block;float: right;
border-radius: 5px;}
.recommend-follow-author-intro{height: auto;width: 690px;margin: 0 auto;box-sizing: border-box;padding-left:100px;padding-top: 55px;font-size: 30px;color: #8c8c8c;line-height: 50px}
.recommend-follow-author-digest{height: auto;width: 690px;margin: 0 auto;box-sizing: border-box;padding-left:100px;font-size: 30px;color: #8c8c8c;line-height: 60px;padding-bottom: 20px}
.recommend-follow-author-intro-text{display: inline-block;height: 100%;width: 100%;border-bottom: 1px solid #ccc;box-sizing: border-box;padding-bottom: 20px}




.slide-enter-active,.slide-leave-active  {
  transition: transform .5s ease;
}
.slide-enter,.slide-leave-to{
  transform: translateX(750px);

}
</style>
