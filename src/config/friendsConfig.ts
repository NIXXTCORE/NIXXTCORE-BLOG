import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "共创",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "这里是参与过共创的作者，若需成为共创者请在抖音私信我",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: false,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Mon3tr",
		imgurl:"https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c000-ce_oYQ9TnqAD4UzfnQIDEIIbJFBOAACRwf6EaAA7c~c5_300x300.jpeg?from=2956013662",
		desc: "咕咕嘎嘎 ~",
		siteurl: "https://v.douyin.com/1-HnqF5RCRQ/",
		tags: ["抖音"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "无H❷O酚酞",
		imgurl:"https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_oABRtAAyyDAL9PYHCPfhgNztA4Ae1tAIE4tXC6~c5_300x300.jpeg?from=2956013662",
		desc: "化学实验党， 在上学，周末更",
		siteurl: "https://v.douyin.com/iY6YiHhB53w/",
		tags: ["抖音"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
