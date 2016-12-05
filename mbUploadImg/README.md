# mobile UploadImg
适用于手机（ios和android端）和pc端的图片缩略图显示，用HTML5 FILE 实现。
##使用方法
<pre>
	<code>
		mbUploadImg.init({
			changeSize:true,
			maxWidth : 1000,
			maxHeight : 1000,
			imgHandle:function(src){
				preview.innerHTML = '&lt;img src="'+ src +'" /&gt;';
			}
		})
	</code>
</pre>

<p>changeSize	是否改变图片大小</p>
<p>maxWidth		图片最大宽度，仅当changeSize为true的时候有效</p>
<p>maxHeight	图片最大高度，仅当changeSize为true的时候有效</p>

test.html   普通的上传
test2.html  压缩的上传
index.html  是基于封装好的上传