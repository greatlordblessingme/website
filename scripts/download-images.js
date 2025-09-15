const fs = require('fs');
const path = require('path');
const https = require('https');

// 图片清单 - 根据当前网站使用的所有外部图片
const imageList = [
  // 首页图片
  { url: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg', filename: 'hero-advantage-1.jpg', description: '全球领先AI技术' },
  { url: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg', filename: 'hero-advantage-2.jpg', description: '30年行业专家积淀' },
  { url: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg', filename: 'hero-advantage-3.jpg', description: '海量企业级数据' },
  { url: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg', filename: 'hero-advantage-4.jpg', description: '简洁高效的用户体验' },

  // 解决方案页面
  { url: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg', filename: 'solutions-hero.jpg', description: 'AI驱动的未来科技' },
  { url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg', filename: 'institutional-cooperation.jpg', description: '机构合作背景' },
  { url: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg', filename: 'individual-cooperation.jpg', description: '个人合作背景' },

  // 案例页面
  { url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', filename: 'cases-hero-bg.jpg', description: '案例页面背景' },

  // 关于我们页面
  { url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', filename: 'about-main.jpg', description: '关于我们主图' },
  { url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', filename: 'mission-bg.jpg', description: '使命背景' },

  // 渠道合作页面
  { url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg', filename: 'partners-hero.jpg', description: '渠道合作背景' },

  // 联系我们页面
  { url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg', filename: 'contact-enterprise.jpg', description: '企业服务场景' },
  { url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg', filename: 'contact-partner.jpg', description: '合作伙伴场景' },

  // 服务流程图片
  { url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', filename: 'service-step-1.jpg', description: '开通账号' },
  { url: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg', filename: 'service-step-2.jpg', description: '上传材料' },
  { url: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg', filename: 'service-step-3.jpg', description: '自动匹配' },
  { url: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg', filename: 'service-step-4.jpg', description: '输出结果' }
];

// 创建下载目录
const downloadDir = path.join(__dirname, '../public/images/downloaded');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// 下载单个图片的函数
function downloadImage(url, filename, description) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(downloadDir, filename);
    
    // 检查文件是否已存在
    if (fs.existsSync(filePath)) {
      console.log(`✅ 跳过已存在的文件: ${filename}`);
      resolve({ filename, status: 'skipped' });
      return;
    }

    console.log(`📥 开始下载: ${filename} - ${description}`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`下载失败: ${response.statusCode} - ${url}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ 下载完成: ${filename}`);
        resolve({ filename, status: 'downloaded' });
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // 删除不完整的文件
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// 批量下载所有图片
async function downloadAllImages() {
  console.log(`🚀 开始批量下载 ${imageList.length} 张图片...`);
  console.log(`📁 下载目录: ${downloadDir}`);
  
  const results = [];
  
  for (const image of imageList) {
    try {
      const result = await downloadImage(image.url, image.filename, image.description);
      results.push({ ...result, description: image.description });
      
      // 添加延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`❌ 下载失败: ${image.filename} - ${error.message}`);
      results.push({ filename: image.filename, status: 'failed', error: error.message });
    }
  }
  
  // 生成下载报告
  const downloaded = results.filter(r => r.status === 'downloaded').length;
  const skipped = results.filter(r => r.status === 'skipped').length;
  const failed = results.filter(r => r.status === 'failed').length;
  
  console.log('\n📊 下载完成统计:');
  console.log(`✅ 成功下载: ${downloaded} 张`);
  console.log(`⏭️  跳过已存在: ${skipped} 张`);
  console.log(`❌ 下载失败: ${failed} 张`);
  
  // 保存下载清单
  const reportPath = path.join(downloadDir, 'download-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    total: imageList.length,
    results: results
  }, null, 2));
  
  console.log(`📄 下载报告已保存: ${reportPath}`);
}

// 执行下载
downloadAllImages().catch(console.error);