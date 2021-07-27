###
 # @Author: 杨宏旋
 # @Date: 2021-05-26 10:41:59
 # @LastEditors: 杨宏旋
 # @LastEditTime: 2021-05-26 10:42:28
 # @Description:
###
###
# @Author: 杨宏旋
# @Date: 2020-05-15 14:54:41
 # @LastEditors: 杨宏旋
 # @LastEditTime: 2020-05-15 15:11:39
# @Description: 打包脚本修改
###
#!/bin/sh
npm run build
echo "--- build release success!!! ---"
echo "--- git add commit pull start!!! ---"
msg=`date +"%Y-%m-%d %H:%M:%S"`
if [ -n "$msg" ]; then
echo "--- git add!!! ---"
  git add -A
echo "--- git commit!!! ---"
  git commit -m"build-${msg}"
echo "--- git pull!!! ---"
  git pull
echo "--- git status!!! ---"
  git status
echo "完成add、commit、pull，别忘了push"
else
  echo "请添加注释再来一遍"
fi
