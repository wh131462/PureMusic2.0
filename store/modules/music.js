// Music
/**
 * music拥有本地所有音乐对象 并且有自己创建的歌单 
 */
// initial state
const state = () => ({
	//上次播放的music
	lastMusic: {

	},
	//当前播放音乐
	playNow: {},
	defaultCover: "../../static/Image/cover.png",//默认封面
	nowLrc: "歌词",
	//全部歌曲列表
	all: [],
	//当前播放列表 
	musicList: [],
	nowList:"",//['string','number'] string:myFavor history  number:listindex
	//我喜欢的歌曲 默认歌单
	myFavorList: {
		listname: "我喜欢的音乐",
		listcover:"../../static/Image/background1.jpg",
		listinfo: "仅仅只是因为喜欢......",
		listtags: [],
		listCreator: "",
		list: []
	},
	//历史播放歌单
	historyList:{
		listname: "历史歌单",
		listcover:"../../static/Image/background1.jpg",
		listinfo: "我曾经听见......",
		listtags: [],
		listCreator: "",
		list: []
	},
	//自定义歌单
	myMusicLists: [{
		listname: "自定义歌单",
		listcover:"../../static/Image/background1.jpg",
		listinfo: "一个自定义的歌单",
		listtags: ['治愈'],
		listCreator: "wh131462",
		list: []
	}, {
		listname: "自定义歌单1",
		listcover:"../../static/Image/background1.jpg",
		listinfo: "一个自定义的歌单1",
		listtags: ['治愈'],
		listCreator: "wh131462",
		list: []
	}],
	//搜索进度
	searchPrograss: {
		isFinish: false, //是否完成
		now: "", //当前路径
		startCount: 0, //扫描之前的歌曲数量
		count: 0, //当前扫描数量
		skipCount: 0,
	},
	//搜索进度对象
	searchTarget: "" //搜索的目标
})

// getters
const getters = {
	//返回所有音乐数量
	allMusicCount(state) {
		return state.all.length;
	},
	//本地搜索 返回函数带实现带参查询
	searchByName: (state) => (name) => {
		console.log("搜索", name)
		return state.musicList.filter((music) => {
			console.log(music.title);
			return music.title.includes(name)
		})
	},
	//通过mid获取音乐信息
	musicInfo: (state,getters,rootState) => (mid) => {
		if(mid==-1){
			return rootState.defaultMusic;
		}
		return state.musicList.find((m) => m.mid == mid);
	},
}

// actions
const actions = {
	async search({
		commit,
		state,
		getters
	}, {
		searchContent
	}) {
		let res = await getters.searchByName(searchContent);
		return res;
	},
	//播放歌曲 通过mid
	async playMusic({
		state,
		rootState,
		commit
	}, mid) {
		if(mid==-1){
			state.playNow =rootState.defaultMusic;
			rootState.isPlaying = false;
			rootState.Player.src = state.playNow.src;
			//访问根commit
			commit('Play', null, {
				root: true
			});
			commit('addToHistory');
			return;
		}
		state.playNow = await state.musicList.find((m) => m.mid == mid);
		rootState.isPlaying = false;
		rootState.Player.src = state.playNow.src;
		//访问根commit
		commit('Play', null, {
			root: true
		});
		commit('addToHistory');
	},
	//通过id获取 
	getLocalCoverById({
		state
	}, albumId) {
		try {
			const MediaStore = plus.android.importClass("android.provider.MediaStore");
			//activity 
			const ContentResolver = plus.android.importClass("android.content.ContentResolver");
			const main = plus.android.runtimeMainActivity();
			plus.android.importClass(main.getContentResolver());
			let cursor = plus.android.invoke(main.getContentResolver(), "query", MediaStore.Audio.Albums
				.EXTERNAL_CONTENT_URI, [MediaStore.Audio.Albums._ID, MediaStore.Audio.Albums.ALBUM_ART],
				MediaStore.Audio.Albums._ID + "=?", albumId, null);
			console.log(cursor);
			let cover;
			console.log("查询", albumId);
			if (plus.android.invoke(cursor, "moveToFirst")) {
				let path = plus.android.invoke(cursor, "getString", plus.android.invoke(cursor, "getColumnIndex",
					MediaStore.Audio.Albums.ALBUM_ART));
				console.log(path);
				cover = path;
				// do whatever you need to do
			}
			//释放对象
			return cover;
		} catch (e) {
			console.log(e);
			return null;
		}
	},
	//获取本地cover
	getLocalCover({
		state
	}, albums) {
		getArtwork(context, song_id, album_id, true)

		// public static Bitmap getArtwork(Context context, long song_id, long album_id, boolean allowdefault) {
		// 	if (album_id < 0) {
		// 		// This is something that is not in the database, so get the album art directly 
		// 		// from the file. 
		// 		if (song_id >= 0) {
		// 			Bitmap bm = getArtworkFromFile(context, song_id, -1);
		// 			if (bm != null) {
		// 				return bm;
		// 			}
		// 		}
		// 		if (allowdefault) {
		// 			return getDefaultArtwork(context);
		// 		}
		// 		return null;
		// 	}
		// 	ContentResolver res = context.getContentResolver();
		// 	Uri uri = ContentUris.withAppendedId(sArtworkUri, album_id);
		// 	if (uri != null) {
		// 		InputStream in = null;
		// 		try {
		// 			in = res.openInputStream(uri);
		// 			return BitmapFactory.decodeStream( in , null, sBitmapOptions);
		// 		} catch (FileNotFoundException ex) {
		// 			// The album art thumbnail does not actually exist. Maybe the user deleted it, or 
		// 			// maybe it never existed to begin with. 
		// 			Bitmap bm = getArtworkFromFile(context, song_id, album_id);
		// 			if (bm != null) {
		// 				if (bm.getConfig() == null) {
		// 					bm = bm.copy(Bitmap.Config.RGB_565, false);
		// 					if (bm == null && allowdefault) {
		// 						return getDefaultArtwork(context);
		// 					}
		// 				}
		// 			} else if (allowdefault) {
		// 				bm = getDefaultArtwork(context);
		// 			}
		// 			return bm;
		// 		} finally {
		// 			try {
		// 				if ( in != null) {
		// 					in .close();
		// 				}
		// 			} catch (IOException ex) {

		// 			}
		// 		}
		// 	}
		// 	return null;
		// }
		// private static Bitmap getArtworkFromFile(Context context, long songid, long albumid) {
		// 	Bitmap bm = null;
		// 	byte[] art = null;
		// 	String path = null;
		// 	if (albumid < 0 && songid < 0) {
		// 		throw new IllegalArgumentException("Must specify an album or a song id");
		// 	}
		// 	try {
		// 		if (albumid < 0) {
		// 			Uri uri = Uri.parse("content://media/external/audio/media/" + songid + "/albumart");
		// 			ParcelFileDescriptor pfd = context.getContentResolver().openFileDescriptor(uri, "r");
		// 			if (pfd != null) {
		// 				FileDescriptor fd = pfd.getFileDescriptor();
		// 				bm = BitmapFactory.decodeFileDescriptor(fd);
		// 			}
		// 		} else {
		// 			Uri uri = ContentUris.withAppendedId(sArtworkUri, albumid);
		// 			ParcelFileDescriptor pfd = context.getContentResolver().openFileDescriptor(uri, "r");
		// 			if (pfd != null) {
		// 				FileDescriptor fd = pfd.getFileDescriptor();
		// 				bm = BitmapFactory.decodeFileDescriptor(fd);
		// 			}
		// 		}
		// 	} catch (FileNotFoundException ex) {

		// 	}
		// 	if (bm != null) {
		// 		mCachedBit = bm;
		// 	}
		// 	return bm;
		// }
		// private static Bitmap getDefaultArtwork(Context context) {
		// 	BitmapFactory.Options opts = new BitmapFactory.Options();
		// 	opts.inPreferredConfig = Bitmap.Config.RGB_565;
		// 	return BitmapFactory.decodeStream(context.getResources().openRawResource(R.drawable
		// 		.play_img_default), null, opts);
		// }
		// private static final Uri sArtworkUri = Uri.parse("content://media/external/audio/albumart");
		// private static final BitmapFactory.Options sBitmapOptions = new BitmapFactory.Options();
		// private static Bitmap mCachedBit = null;

		// //获取cursor:

		// myCur = getContentResolver().query(MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,
		// 	new String[] {
		// 		MediaStore.Audio.Media.TITLE, MediaStore.Audio.Media.DURATION, MediaStore.Audio
		// 			.Media.ARTIST, MediaStore.Audio.Media._ID, MediaStore.Audio.Media.ALBUM,
		// 			MediaStore.Audio.Media.DISPLAY_NAME, MediaStore.Audio.Media.DATA, MediaStore
		// 			.Audio.Media.ALBUM_ID
		// 	}, null, null, null);
		// myCur.moveToPosition(position);

		// //设置专辑封面图片：

		// long songid = myCur.getLong(3);
		// long albumid = myCur.getLong(7);
		// Bitmap bm = MusicUtils
		// 	.getArtwork(this, songid, albumid, true);
		// if (bm != null) {
		// 	Log.d(TAG, "bm is not null==========================");
		// 	playImg.setImageBitmap(bm);
		// } else {
		// 	Log.d(TAG, "bm is null============================");
		// }
	},
	async isNeedCover({
		state,
		commit,
		dispatch
	}, {
		cover,
		title,
		src,
		mid
	}) {
		return new Promise((resolve, reject) => {
			//如果不是默认封面 就不需要进行获取封面了  因为代表已经是正确的
			if (cover != state.defaultCover) {
				reject("rejected");
			} else {
				//分发事件 开始获取封面
				dispatch("getCover", {
					"title": title,
					"src": src,
					"mid": mid
				});
				resolve("resolved");
			}
		});
	},
	//获取单个封面 
	async getCover({
		state,
		commit
	}, {
		title,
		src,
		mid
	}) {
		try {
			//通过音乐文件获取bitmap 再转png 版本通用 返回数据为图片保存地址
			let main = plus.android.runtimeMainActivity();
			let Context = plus.android.importClass('android.content.Context');
			let MediaMetadataRetriever = plus.android.importClass('android.media.MediaMetadataRetriever');
			let Bitmap = plus.android.importClass('android.graphics.Bitmap');
			let BitmapFactory = plus.android.importClass('android.graphics.BitmapFactory');

			let url = plus.io.convertAbsoluteFileSystem(src);
			console.log("url", url)
			//创建实例
			let mediaMetadataRetriever = plus.android.newObject(
				"android.media.MediaMetadataRetriever"); //new MediaMetadataRetriever();
			mediaMetadataRetriever.setDataSource(url);
			let pic = mediaMetadataRetriever.getEmbeddedPicture(); //转化EmbeddedPicture Byte[]类型
			console.log("pic null", pic == null)
			if (pic == null) {
				//释放对象
				console.log("释放对象", title, src);
				mediaMetadataRetriever.release();
				return;
			} //无法获取 直接返回空
			console.log("将要转化为bim", title);
			let bim = BitmapFactory.decodeByteArray(pic, 0, pic.length); //转到Bitmap
			console.log("bim", bim)
			//将图片保存本地 引入Java类
			let File = plus.android.importClass('java.io.File');
			let FileOutputStream = plus.android.importClass('java.io.FileOutputStream');

			//保存到私有目录
			let dir = plus.io.convertLocalFileSystemURL("_doc/");
			let f = new File(dir, title + ".png");
			console.log("f", f)
			let albumSrc = dir + title + ".png";
			console.log("将要处理", title);
			if (f.exists()) { //存在就直接保存
				console.log("已经存在", albumSrc);
				f.delete();
			}
			let out = new FileOutputStream(f);
			//压制图片为png格式
			bim.compress(Bitmap.CompressFormat.PNG, 100, out);
			console.log("compress")
			out.flush();
			console.log("flush")
			out.close();
			console.log("close")
			//释放对象
			console.log("释放对象", title, src);
			mediaMetadataRetriever.release();
			console.log(mid, albumSrc)
			commit("setCover", {
				"mid": mid,
				"cover": albumSrc
			});
		} catch (e) {
			console.log(e);
			return;
		}
	},
	//获取所有音乐文件
	async getAll({
		state,
		getters,
		dispatch,
		commit
	}) {
		console.log("开始扫描");
		let main = plus.android.runtimeMainActivity();
		let id = getters.allMusicCount;
		if (plus.os.name == 'Android') {
			let Build = plus.android.importClass('android.os.Build');
			//Android系统版本大于等于10 Build.VERSION.SDK_INT>=29
			//直接通过MediaStore查询所有音乐
			let MediaStore = plus.android.importClass("android.provider.MediaStore");
			plus.android.importClass(main.getContentResolver());
			let cursor = main.getContentResolver().query(MediaStore.Audio.Media
				.EXTERNAL_CONTENT_URI, [
					MediaStore
					.Audio.Media.TITLE, MediaStore.Audio.Media.ALBUM, MediaStore.Audio
					.Media.ARTIST,
					MediaStore
					.Audio.Media.YEAR, MediaStore.Audio.Media.DATA, MediaStore.Audio
					.Media.DURATION,
					MediaStore
					.Audio.Media.ALBUM_ID
				], null, null, MediaStore.Audio.Media.DEFAULT_SORT_ORDER);
			plus.android.importClass(cursor);
			cursor.moveToFirst()
			if (cursor != null) {
				commit('updateSearchPrograss', {
					key: "isFinish",
					val: false
				});
				commit('updateSearchPrograss', {
					key: "startCount",
					val: getters.allMusicCount
				});
				commit('updateSearchPrograss', {
					key: "count",
					val: 0
				});
				while (cursor.moveToNext()) {
					let data = [];
					data["title"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio
						.Media.TITLE));
					data["albums"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio
						.Media.ALBUM));
					data["artist"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio
						.Media.ARTIST));
					data["year"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio
						.Media.YEAR));
					data["src"] = cursor.getString(cursor.getColumnIndex(MediaStore.Audio
						.Media.DATA));
					data["duration"] = cursor.getString(cursor.getColumnIndex(MediaStore
						.Audio.Media.DURATION));
					data["albumId"] = cursor.getString(cursor.getColumnIndex(MediaStore
						.Audio.Media.ALBUM_ID));
					commit('updateSearchPrograss', {
						key: "count",
						val: ++state.searchPrograss.count
					});
					
					if (state.all.findIndex((m) => m.src == data["src"]) != -1) {
						console.log(data["title"] + "已存在");
						continue;
					}
					if (parseInt(data["duration"]) < 30000 || data["duration"] == null) {
						console.log(data["title"] + " duration:" + data["duration"]);
						commit('updateSearchPrograss', {
							key: "skipCount",
							val: ++state.searchPrograss.skipCount
						});
						continue;
					}
		
					//插入pl
					let obj = {
						"mid": id++,
						"cover": "../../static/Image/cover.png",
						"title": data["title"],
						"author": data["artist"],
						"albums": data["albums"],
						"albumId": data["albumId"],
						"year": data["year"],
						"duration": data["duration"],
						"src": data["src"],
						"lrc": "",
					};
					console.log(obj);
					commit('addSong', obj);
				}
				//结束
				cursor.close();
				commit('updateSearchPrograss', {
					key: "isFinish",
					val: true
				});
				commit('updateMusicList');
			}
		}
	},
	
}

// mutations
const mutations = {
	//设置成cover
	setCover(state, {
		index,
		mid,
		cover
	}) {
		let operation;
		console.log("本次接收到的参数：", index, mid, cover)
		if (mid == undefined) {
			operation = state.all[index].mid;
			console.log("通过index设置cover为" + cover);
			state.all[index].cover = cover;
			state.musicList.find((m) => {
				return m.mid == operation
			}).cover = cover;
		} else {
			operation = mid;
			console.log("通过mid设置cover为" + cover);
			state.all.find((m) => {
				return m.mid == mid
			}).cover = cover;
			state.musicList.find((m) => {
				return m.mid == mid
			}).cover = cover;
		}
		//切换当前播放音乐的封面
		if (state.playNow.mid == operation) {
			state.playNow.cover = cover;
		}

	},
	//获取本地数据
	getLocalData(state) {
		try {
			const res = uni.getStorageSync('all');
			if (res) {
				console.log("获取上次播放歌曲成功", res);
				state.all = res;
			}
		} catch (e) {
			state.all = null;
			console.log(e)
		}
	},
	//设置本地数据
	setLocalData(state) {
		try {
			uni.setStorageSync('all', state.all);
			console.log("保存all成功")
		} catch (e) {
			// error
			console.log(e)
		}
	},
	//获取上一首歌
	getLastMusic(state) {
		try {
			const res = uni.getStorageSync('LastMusic');
			if (res) {
				console.log("获取上次播放歌曲成功", res);
				state.LastMusic = res;
			}
		} catch (e) {
			state.LastMusic = null;
			console.log(e)
		}
	},
	//关闭前保存播放信息
	saveLastMusic(state) {
		try {
			uni.setStorageSync('LastMusic', state.playNow);
			console.log("保存lastmusic成功")
		} catch (e) {
			// error
			console.log(e)
		}
	},
	//扫描到歌曲 添加
	addSong(state, music) {
		state.all.push(music);
	},
	//去重
	noRepeat(state) {

		state.all = Array.from(new Set(...state.all));
		console.log("去重", state.all.length)
	},
	//更新音乐列表
	updateMusicList(state) {
		//console.log(state.all)
		state.musicList = state.all;
	},
	//改变当前音乐列表
	changeList(state,{list}){
		state.nowList=list;
	},
	//添加音乐到历史歌单
	addToHistory(state){
		//添加进历史歌单 先进行判断
		let mindex=state.historyList.list.indexOf(state.playNow);
		if(mindex!=-1){
			//删除元素
			state.historyList.list.splice(mindex, 1);
		}
		state.historyList.list.unshift(state.playNow);
	},
	//更新搜索进度
	updateSearchPrograss(state, {
		key,
		val
	}) {
		state.searchPrograss[key] = val;
	},
	//搜索目标设置
	setTarget(state, {
		target
	}) {
		console.log("目标已经修改为" + target)
		state.searchPrograss.now = target;
		state.searchTarget = target;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
