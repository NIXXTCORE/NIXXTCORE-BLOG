import type Sponsor from "@/pages/sponsor.astro";
import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 归档
			LinkPresets.Archive,

			// 分类
			LinkPresets.Categories,

			// 标签
			LinkPresets.Tags,
		],
	});

	// 友链
	links.push(LinkPresets.Friends);

	// 我的及其子菜单
	links.push(LinkPresets.Gallery),

	// 关于及其子菜单
	links.push({
		name: "更多",
		url: "#",
		icon: "material-symbols:menu",
		children: [
			// 赞助
			LinkPresets.Sponsor,

			// 关于页面
			LinkPresets.About,
			{
				name: "QQ 作曲交流群",
				url: "https://qq.com",
				external: true,
				icon: "fa7-brands:qq",
			},
		],
	});

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "共创",
		url: "/friends/",
		icon: "material-symbols:group",
	},
	Sponsor: {
		name: "支持",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
	},
	About: {
		name: "关于",
		url: "/about/",
		icon: "material-symbols:info",
	},
	Gallery: {
		name: "动态",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
