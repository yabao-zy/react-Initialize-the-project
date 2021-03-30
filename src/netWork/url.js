

const urlList = {
    'tset': ['GET', '/list'],
    'authToken': ['POST', '/bot/other/app/auth/token'], //获取令牌
    'getUser': ['POST', '/cctip/app/user/info'], //获取用户信息
    'getbalance': ['GET', '/wallet/v1/balance'], //获取钱包余额
    'token_list': ['GET', '/funds/v1/token_list'], //获取全部代币列表
    'get_recharge_addr': ['POST', '/funds/v1/account/bind_chain_addr'], //获取充值信息
    'getOption': ['POST', '/cctip/app/user/option/status/list'], //获取账户安全信息
    'setPassword': ['POST', '/cctip/app/assets/password/set'], //设置支付密码
    'changePassword': ['POST', '/cctip/app/assets/password/updatebyoldpw'], //修改支付密码
    'resetPassword': ['POST', '/cctip/app/assets/password/reset'], //重置支付密码
    'sendCode': ['POST', '/cctip/app/email/code/send'], //获取邮箱验证码
    'bindEmial': ['POST', '/cctip/app/user/email/bind'], //绑定邮箱
    'resetEmail': ['POST', '/cctip/app/user/email/reset'], //重置邮箱
    'closeDouble': ['POST', '/cctip/app/user/doublecheck/set'], //关闭双重验证
    'setDaily': ['POST', '/cctip/app/user/daily/quota/set'], //设置每日限额
    'getRecord_list': ['GET', '/funds/v1/account/record_list'], //获取交易记录
    'getFlowslist': ['POST', '/wallet/v1/airdrop/flows/list'], //获取空投记录
    'getDailylist': ['POST', '/lottery/v1/records'], //获取今日空投记录
    'getConvertlist': ['GET', '/wallet/v1/history'], //获取兑换记录
    'getPaytolist': ['POST', '/ccpay/cctip/app/payto/record'], //获取商家支付记录
    'getAccount': ['DELETE', '/funds/v1/account/record'], //获取充值，提现详情
    'getSinglerecord': ['POST', '/ccpay/cctip/app/payto/singlerecord'], //获取商户支付详情
    'getAirdropDetail': ['POST', '/wallet/v1/airdrop/flows/detail'], //获取空投详情
    'getRecordDetail': ['POST', '/lottery/v1/record/detail'], //获取今日空投详情
    'withdrawalFee': ['POST', '/funds/v1/account/fee'], //提现手续费
    'withdrawal': ['POST', '/funds/v1/account/withdraw2'], //开始提现
    'applist': ['POST', '/ccpay/cctip/app/list'], //获取应用列表

}



export default urlList


