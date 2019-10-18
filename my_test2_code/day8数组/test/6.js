function getcookie(objname){
	var arrstr = document.cookie.split("; ");
	for(var i = 0;i < arrstr.length;i ++){
		var temp = arrstr[i].split("=");
		if(temp[0] == objname){ 
			return unescape(temp[1]);
		}
	}
}

var cancel = function(){
	
		$("#toplevelTextCommentTitle").val("");
		$("#toplevelTextCommentTitle").attr("placeholder","新建话题");
		$("#toplevelTextCommentContent").val("");
		$("#images").html("");
	//	$("#imgUploadProgress2").html("");
		$(".newPic").animate({height:"0"},300)
		$("#dataSource").html("");
	}

var addGroupDiscussReply = function(topicId,replycount){
	
 	var doc = document.getElementById("discuss"+topicId);
 	var content = doc.value;
	if(content==null||content=='')
	{
		alert("内容不能为空！");
		return;
	}
	/*if(content.length>300){
		alert("字数不能超过300");
		doc.value = content.substring(0,300);
		return;
	}*/
	doc.value = "";
	jQuery.post("/bbscircle/addreply",
    	{
    		topicId:topicId,
			content : content,
			pagesize:replycount,
			order:1,
			type:1
    	},
        function(data){
    		if(data.indexOf('error')>0){
    			alert("data");
    		}else{
			   var doc = document.getElementById("replylist"+topicId);
        	   data = data.replace(/(^\s*)|(\s*$)/g,"");
			   doc.innerHTML = data;
			   var rcdoc = document.getElementById("replycount"+topicId);
			   rcdoc.innerHTML = parseInt(rcdoc.innerHTML)+1;
			   //alert("操作成功！");
			   // showorhide("replaytextarea"+topicId);
    		}
		}
	);
 };

 var groupreply = function(num,topicid,schoolid) {
 		
		var doc = document.getElementById("replylist"+topicid);
		var showeddoc = document.getElementById("showed"+topicid);
		if(doc.style.display!="none"){
			doc.style.display = "none";
			//showeddoc.innerHTML="显示";
		}else{
			var obj = doc.innerHTML;
			if(obj==null||obj==""){
			     jQuery.post("/bbscircle/getreplysbytopicId",
			    	{
						topicid:topicid,
						pagesize:num,
						order:1,
						type:1
			    	},
			        function(data){
			    		data = data.replace(/(^\s*)|(\s*$)/g,"");
			    		doc.innerHTML = data;
					}
				);
			     doc.style.display = "block";
				  show("replaytextarea"+topicid);
			}else{
				doc.style.display = "block";
				 show("replaytextarea"+topicid);
			}
		}
};

var addgrouptopcomment = function(clazzid,courseid){
 	var title = document.getElementById("toplevelTextCommentTitle").value;
	//if(title==null || title==''|| title.trim()=='')
	//{
	//	alert("标题不能为空！");
	//	return;
	//}
	if(title.length>150){
		alert("字数不能超过150");
		document.getElementById("toplevelTextCommentTitle").value = title.substring(0,150);
		return;
	}
	
   /*
    if(!validateVerifyCode()){
		return false;
	}
	*/
	var inputObjVal=$(".verifyCodeSpan input").val();

 	var content = document.getElementById("toplevelTextCommentContent").value;
	/*if(content==null||content=='')
	{
		alert("内容不能为空！");
		return;
	}*/
	/*if(content.length>300){
		alert("字数不能超过300");
		document.getElementById("toplevelTextCommentContent").value = content.substring(0,300);
		return;
	}*/
	var files=$("#files");
	if((title==""||title.trim()=='')&&(content==""||content.trim()=='')&&(!files.length>0)){
			alert("请输入话题名称或者内容！");
			return false;
	}
	
	var originTitle=title;
		//关联章节
	var chapterId = document.getElementById("chapterIdid").value;
	var chapterTitle = $("#cur"+chapterId).find(".chapternumber").html();
	if(chapterTitle!=null){
		title = "[" + chapterTitle + "节] " + title
	}
	var img=$("#images").find("img");
	var str="";
	for(var i=0;i<img.size();i++){
		var imgsrc=img[i];
		if(i==img.size()){
			str=str+imgsrc.src.replace("25_25c","origin");
		}else{
			str=str+imgsrc.src.replace("25_25c","origin")+",";
		}
	}
	//title=escape(encodeURI(title));
	document.getElementById("toplevelTextCommentTitle").value = "";
	//content=escape(encodeURI(content));
	document.getElementById("toplevelTextCommentContent").value = "";
	var ask = 0;
	if(document.getElementById("askteacher") != null){
		if(document.getElementById("askteacher").checked == true){
    		ask=1;
    	}
	}
	var chapterId=0;
    if(document.getElementById("selchapter_id") !=null){
    	if(document.getElementById("selchapter_id").value!=''){
    	    chapterId=document.getElementById("selchapter_id").value;
    	}
	}
    
    var allNoticeAttachment = noticeAttachment();
    
    var chapterId=document.getElementById("chapterIdid").value; 
    
	jQuery.post("/bbscircle/grouptopic/publish",
    	{
    	   courseId:courseid,
		   clazzid:clazzid,
		   title: title,
		   content:content,
		   type:2,
		   files:str,
		   veridyCode:inputObjVal,
		   chapterId:chapterId,
		   attachmentFile : allNoticeAttachment
        },
            function(data){
        	/*
        	 if(data.indexOf('verifyCode is wrong')!=-1){    
	        	 $("#toplevelTextCommentTitle").val(originTitle);
	        	 $("#toplevelTextCommentContent").val(content);
	        		alert("验证码错误");
	        		return;
	        	}
        	*/
        	
    		   data = data.replace(/(^\s*)|(\s*$)/g,"");
    		   var doc = document.getElementById("content2");
			  if(data.indexOf('error')>0){
    			alert("data");
        		}else{
        		 	doc.innerHTML = data;
        		}
 //   	       showlist();	
			 
			  
			  
			  
 			if(data.indexOf('error')<0){ 
    	       $(function(){
            	swfu2 = new SWFUpload({
            		flash_url : "/js/swfupload/swfupload.swf",
            		upload_url: "/edit/swfUploadImage?uid="+getcookie("_uid"),
            		file_types : "*.jpg;*.jpeg;*.gif;*.png",
            		file_types_description : "All Images",
            		file_size_limit : "4000000B",
            		file_queue_limit : 0,
            		custom_settings : {
            			progressTarget : "imgUploadProgress2",
            			cancelButtonId : "imgbtnCancel2",
            			//currentUrl: $("fileUploader_group").attr("data")
            		},
            		debug: false,
            
            		// Button settings
            		button_image_url: "/images/group/addPic.png",
            		button_placeholder_id: "fileUploader_group",
            		button_width: "30",
            		button_height: "27",
            		button_action : SWFUpload.BUTTON_ACTION.SELECT_FILES,
            		button_cursor: SWFUpload.CURSOR.HAND,
            		button_window_mode: SWFUpload.WINDOW_MODE.OPAQUE,
            		
            		// The event handler functions are defined in handlers.js
            		upload_start_handler : uploadCover_upload_start_handler,
            		file_queued_handler : uploadCover_file_queued_handler,
            		file_queue_error_handler : SWFUpload.fileQueueError,
            		file_dialog_complete_handler : uploadCover_file_dialog_complete_handler,
            		upload_progress_handler : uploadCover_upload_progress_handler,
            		upload_error_handler : SWFUpload.uploadError,
            		upload_success_handler : uploadLandCover_upload_success_handler,
            		upload_complete_handler : SWFUpload.uploadComplete,
            		queue_complete_handler : uploadCover_queue_complete_handler
            	});
            });
            }
            $(function(){
					$(".newTopic0").click(function(){
					down();
					})
				})
				baguetteBox.run('.smallImg', {
  					animation: 'fadeIn',
					});
		}
	);
 };
 
 	function addorcanclePraise(topicId,obj){
	      //var value=parseInt($("#ispraise_"+topicId).val());
		  //if(value==1){
		  	//canclePraise(topicId,obj);
		  //}else{
		  	//addPraise(topicId,obj);
		  //}
		   if(obj.className=='zan1 fr'){
		  	canclePraise(topicId,obj);
		  }else{
		  	addPraise(topicId,obj);
		  }
	}	
	
	function addPraise(topicId,obj){ 
		jQuery.ajax({ 
    	type: "post", 
    	url : "/bbscircle/addpraise", 
    	dataType:"json",
    	async : false, 
    	data: {
    			topicId : topicId
    		}, 
        success: function(data){
    		if(data.result==1){
        		obj.innerHTML="<i></i>"+data.data.count;
				$("#ispraise_"+topicId).val(1);
				obj.className="zan1 fr";
    		}
    		//alert(data.msg);
        } 
   	 	}); 
	}		
	
	function canclePraise(topicId,obj){ 
		jQuery.ajax({ 
    	type: "post", 
    	url : "/bbscircle/canclepraise", 
    	dataType:"json",
    	async : false, 
    	data: {
    			topicId : topicId
    		}, 
        success: function(data){
    		if(data.result==1){
        		obj.innerHTML="<i></i>"+data.data.count;
				$("#ispraise_"+topicId).val(0);
				obj.className="zan fr";
    		}
    		//alert(data.msg);
        	} 
   	 	}); 
	}
	
var topicPage = 1;
var getMoreTopic = function(clazzid,pagecount){
	topicPage=topicPage+1;
    jQuery.ajax({ 
    	type: "post", 
    	url : "/schoolCourseInfo/getgrouptopic", 
    	dataType:'html',
    	data: {
        		clazzid : clazzid,
				page : topicPage,
				type : 3
    		}, 
    	success: function(data){
    		
        	data = data.replace(/(^\s*)|(\s*$)/g,"");
            var doc = document.getElementById("showTopics");
					
			doc.innerHTML += data;
					
			//var more=$('#classmate_id input:hidden:last').val();
			//var more=$('#classmate_id input[type=hidden]:last').val();
			if(topicPage<pagecount){
				 $('#getMoreTopic').show();
			}else{
				 $('#getMoreTopic').hide();
			}
			/*$(function(){
    				$(".smallImg a img").click(function(){
            		var src = $(this).attr("src");
            		$(".bigImg img").attr("src",src.replace('120_120c','800_800'));
            		setTimeout("showimg()",400);
            		})
                	$(".bigImg").click(function(){
                		$(".bigImg img").attr("src",'')
                		$(".bigImg ").hide();
                		$(".imgBg").hide();
                		$("body").css("overflow","scroll")
                	})
        		})*/
        	baguetteBox.run('.smallImg', {
  				animation: 'fadeIn',
			});
    	} 
    }); 
};

function delTopic(clazzId,topicId) {
	if(confirm("确定删除吗？")) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/deletetopic",
			data : {
				//"courseid":$courseId,
				"clazzid":clazzId,
				"topicid":topicId,
				//"ut":"$!ut"
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
			   		//alert("删除成功");
				 	//window.location.reload();
					$("#topic_"+topicId).remove();
				}else{
					alert(data.errorMsg);
				}
			}
		});
	}
}

var getMoreReplys = function(topicId,clazzid){
	var t = this;
		
	if(!t.pages){
		t.pages = {};
	}
	
	t.pages[topicId] = t.pages[topicId]?t.pages[topicId]:2;
	
		
    jQuery.ajax({ 
    	type: "post", 
    	url : "/bbscircle/getreplysbytopicId", 
    	dataType:'html',
    	data: {
				clazzid : clazzid,
        		topicid : topicId,
				page : t.pages[topicId],
				type : 3
    		}, 
    	success: function(data1){
    		
        	data1 = data1.replace(/(^\s*)|(\s*$)/g,"");
            var doc = document.getElementById("topic_replys_"+topicId);
					
			doc.innerHTML += data1;
			var pageCount=parseInt(t.pages[topicId]);
			$("#reply_page_"+topicId).val(pageCount);
			if(pageCount<parseInt($("#reply_pagecount_"+topicId).val())){
				 $('#more_reply_'+topicId).show();
			}else{
				 $('#more_reply_'+topicId).hide();
			}
			
			t.pages[topicId] = pageCount+1;
    	} 
    }); 
};

function form_rep_submit(topicId,clazzId){
	      
		var content=$("#"+topicId).val();
		if(content==""||content=="回复话题:"||content.trim()==''){
			alert("请输入回复内容！");
			return false;
		}
		jQuery.ajax({ 
        	type: "post", 
        	url : "/bbscircle/addreply", 
        	dataType:'html',
        	data: {
                        clazzid : clazzId,
        				topicId : topicId,
            			content : content,
            			type : 3
        		}, 
        	success: function(data){
				var div=$("#more_reply_"+topicId);
				//if(div!=null&&(div.length==0||div.css("display")=="none")){
					data = data.replace(/(^\s*)|(\s*$)/g,"");
            		var doc = document.getElementById("topic_replys_"+topicId);
					
					doc.innerHTML += data;
					
				//}else{
				//	alert("亲，添加回复成功！");
				//}
				$("#"+topicId).val("");
				var reply_count=parseInt($("#reply_count"+topicId).val())+1;
				$("#reply_count"+topicId).val(reply_count);
				document.getElementById("reply_count_"+topicId).innerHTML="<i></i>"+reply_count;
        	} 
    	}); 
	}

function delReply(topicId,replyId,type) {
	if(confirm("确定删除吗？")) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/deletereply",
			data : {
				"topicid":topicId,
				"replyid":replyId,
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
			   		//alert("删除成功");
					if(type==2){
						$("#second_reply_"+replyId).remove();
						$("#reply_div_"+replyId).remove();
					}else{
						$("#plDiv_"+replyId).remove();
					}
				}else{
					alert(data.errorMsg);
				}
			}
		});
	}
}

function invitation_addReply(replyId2,topicId,replyId){
	      //replyId2 二级回复id replyId一级回复id
		var content=$("#reply_content_"+replyId).val();
		if(content==""||content=="回复话题:"||content.trim()==''){
			alert("请输入回复内容！");
			return false;
		}
		jQuery.ajax({ 
        	type: "post", 
        	url : "/bbscircle/addreply", 
        	//dataType:'html',
        	data: {
        				topicId : topicId,
						replyId : replyId2,
            			content : content,
            			type : 4
        		}, 
        	success: function(data){
				if(data.indexOf('error')>0){
    				alert("data");
    			}else{
    				data = data.replace(/(^\s*)|(\s*$)/g,"");
    				var doc = document.getElementById("second_data_"+replyId);
            		doc.innerHTML+= data;
            		$("#reply_content_"+replyId).val("");
    				//$("#reply_div_"+replyId2).toggle();
					//$("#reply_div_"+replyId).toggle();
				}
        	} 
    	}); 
	}	

function showreplytext2(topicId,secondid,replyid,type) {
	var fr=$("#first_reply_"+topicId).css("display");
	var sr=$("#reply_div_"+topicId).css("display");
	if(type==1){
		//if(fr=="none"){
		$("#reply_div_"+topicId).hide();
		$("#first_reply_"+topicId).show();
		//}
	}else{
		$("#first_reply_"+topicId).hide();
		var aaa=$("#reply_submit_"+topicId);
		aaa.removeAttr("onclick");
		aaa.attr("onclick","invitation_addReply("+secondid+","+topicId+","+replyid+")");
		//alert(aaa);
		$("#reply_div_"+topicId).show();
	}
}

function showreplytext(topicId,secondid,replyid,replyname) {
	var sr=$("#reply_div_"+replyid);
	var value=$("#reply_val_"+replyid).val();
	var ph=$("#reply_content_"+replyid);
	var click=$("#reply_submit_"+replyid);
	if(value==-1){
		$("#reply_val_"+replyid).val(secondid);
		ph.attr("placeholder","回复"+replyname+":");
		click.attr("onclick","invitation_addReply("+secondid+","+topicId+","+replyid+")");
		sr.show();
	}else if(value==secondid){
		if(sr.css("display")=="none"){
			sr.show();
		}else{
			sr.hide();
		}
	}else{
		$("#reply_val_"+replyid).val(secondid);
		ph.attr("placeholder","回复"+replyname+":");
		click.attr("onclick","invitation_addReply("+secondid+","+topicId+","+replyid+")");
		sr.show();
	}
}

function toTop(topicId) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/totop",
			data : {
				//"courseid":$courseId,
				//"clazzid":$clazzid,
				"topicid":topicId,
				//"ut":"$!ut"
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
			   		//alert("置顶成功");
					//$("#second_reply_"+replyId).remove();
					//$("#reply_div_"+replyId).remove();
					window.location.reload();
				}else{
					alert(data.errorMsg);
				}
			}
		});
}
function cancelTop(topicId) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/canceltop",
			data : {
				//"courseid":$courseId,
				//"clazzid":$clazzid,
				"topicid":topicId,
				//"ut":"$!ut"
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
			   		//alert("取消置顶成功");
					//$("#second_reply_"+replyId).remove();
					//$("#reply_div_"+replyId).remove();
					window.location.reload();
				}else{
					alert(data.errorMsg);
				}
			}
		});
}

function addChoice(topicId) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/addchoice",
			data : {
				"topicid":topicId,
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
					window.location.reload();
				}else{
					alert(data.errorMsg);
				}
			}
		});
}
function cancelChoice(topicId) {
		jQuery.ajax({
			type : "get",
			url : "/bbscircle/cancelchoice",
			data : {
				"topicid":topicId,
			},
			dataType:'json',
			success : function(data){
			   	if(data.result==1){
			   		//alert("取消置顶成功");
					//$("#second_reply_"+replyId).remove();
					//$("#reply_div_"+replyId).remove();
					window.location.reload();
				}else{
					alert(data.errorMsg);
				}
			}
		});
}

/**
 * 讨论添加附加初始化
 * @returns
 */
function initTopicAttachmentFile() {
	var attachments = document.getElementsByName("attachment");
	var filesize = attachments.length;
	if (filesize >= 9) {
		alert("最多能上传9份附件！");
		return false;
	} else {
		return true;
	}
}

/**
 * 讨论添加附件
 * @returns
 */
function addTopicAttachmentFile (tagClassName) {
	var attachmentSize = document.getElementsByName("attachment").length;
	var addFileA = document.getElementById("addFileA");
	var disable = addFileA.getAttribute("disable");
	if (disable == "true" || disable == true) {
		alert("其他附件正在上传中，请稍候再试");
		//清空当前不允许上传的文件，方便下次上传
		clearInputFile();
		return;
	}
	addFileA.setAttribute("disable",true);
	
    var data = new FormData();  
 	var file = document.getElementById("file");
 	if (file == null) {
 		return;
 	}
    data.append('file', file.files[0]);
    
    getFileCloudMsg(data);
    
    $.ajax({  
        url: '/upload/uploadNew',  
        type: 'POST',  
        data: data,  
        processData: false,  // 告诉jQuery不要去处理发送的数据  
        contentType: false,  // 告诉jQuery不要去设置Content-Type请求头  
        dataType : 'json',
     	success: function (data) {
            if (data.state == "SUCCESS") {
            	if (attachmentSize == 0) {
            		var content = document.getElementsByClassName(tagClassName);
                	var curheight = content.item(0).style.height;
            		content.item(0).style.height = addHeight(curheight , 140);
            	}
            	var noticeAttachments = document.getElementById("noticeAttachmentsId");
            	noticeAttachments.style.display = "block";
            	
            	var original=data.original.split(".");
            	var imgUrl = '/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_default.gif';
            	var dataStr = '';
            	if (original.length > 1) {
            		var type = original[original.length -1];
            		imgUrl = getFileTypeUrl(type);
            		data.type=type;
            		dataStr = JSON.stringify(data);
            		var reg = new RegExp("\"" , "g"); //创建正则RegExp对象 
            		dataStr = dataStr.replace(reg,"'"); 
            	}
            	var attachMentName = data.original;
            	if (attachMentName.length > 16) {
            		attachMentName = attachMentName.substring(0,16);
            	}
            	var dataUrl='<div id="' + data.url + '" class="oneAttachment" name="attachment" value="' + dataStr + '"><img style="float:left;height:23px;width:23px;" src="' + imgUrl + '"><a title="' + data.original + '" class="attachmentHref"  href="/ueditorupload/read?objectId=' + data.url + '" target="_blank">' + attachMentName + '</a><a href="javascript:void(0);" class="attachmentDelete" onclick="deleteAttachment(\'' + data.url + '\',\'' + tagClassName + '\')">删除</a></div>';
            	$("#dataSource").append(dataUrl);
            	addFileA.setAttribute("disable" , false);
            	clearInputFile();
        	} else {
				alert("上传失败！");
				addFileA.setAttribute("disable", false);
				clearInputFile();
			}
        },
        error: function () {
        }
    });
}

function getFileTypeUrl(type){
	var typeUrl = null;
	var allType = [ 'doc', 'exe', 'mp3', 'mv', 'pdf', 'ppt', 'psd', 'rar',
			'txt', 'xls', 'xlsx', 'chm' ];
	for (var i = 0; i < allType.length; i++) {
		var oneType = allType[i];
		if (oneType == type) {
			typeUrl = '/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_'
					+ type + '.gif';
			break;
		}
	}
	if (type == 'jpg' || type == 'png') {
		typeUrl = '/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_'
				+ type + '.png';
	}
	if (typeUrl == null || typeUrl == '') {
		typeUrl = '/js/editor20150812/dialogs/attachment_new/fileTypeImages/icon_default.gif';
	}
	return typeUrl;
}

function noticeAttachment(){
	var attachment = "";
	var attachmentsByName = document.getElementsByName("attachment");
	if (attachmentsByName != null && attachmentsByName.length > 0) {
		for (var i = 0; i < attachmentsByName.length; i++) {
			var attachmentA = attachmentsByName[i];
			if (attachmentA == null) {
				continue;
			}
			attachment += attachmentA.getAttribute('value') + ",";
		}
	}
	return attachment;
}

function deleteAttachment(obj , tagClassName) {
	$("#" + obj).remove();
	var attachmentsSize = document.getElementsByName("attachment").length;
	if (attachmentsSize == 0) {
		var content = document.getElementsByClassName(tagClassName);
		var imgcount = $("#images").find("img").size();
		if (imgcount > 0) {
			$("." + tagClassName).animate({height : "250px"}, 300);
		} else {
			$("." + tagClassName).animate({height : "224px"}, 300);
		}
	}
}

/**
 * 清空当前不允许上传的文件
 * @returns
 */
function clearInputFile(){
	var curfile = jQuery("#file");
	curfile.after(curfile.clone().val(""));
	curfile.remove();
}

/**
 * 增加框体高度
 */
function addHeight(curHeight , tab){
	if (curHeight == null) {
		return curHeight;
	}
	if (curHeight.toString().indexOf("px") == -1) {
		return curHeight;
	}
	var curHeightInt = curHeight.substring(0, curHeight.length - 2);
	curHeightInt = parseInt(curHeightInt) + parseInt(tab);
	curHeightInt += "px";
	return curHeightInt;
}

function getFileCloudMsg (filedata) {
	$.ajax({  
//		url: '/upload/uploadNew',  
        url: '/upload/cloudUpload',  
        type: 'POST',  
        data : filedata,
        processData: false,  // 告诉jQuery不要去处理发送的数据  
        contentType: false,  // 告诉jQuery不要去设置Content-Type请求头  
        dataType : 'json',
        success: function (data) {
        	if (data.result == '1') {
        		return data.fileNamePath;
        	} else {
        		return '';
        	}
        }
	 });
}