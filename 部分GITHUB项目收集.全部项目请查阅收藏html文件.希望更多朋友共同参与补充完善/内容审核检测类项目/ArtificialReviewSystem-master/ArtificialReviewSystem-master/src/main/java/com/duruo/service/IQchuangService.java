package com.duruo.service;

import com.duruo.common.ServerResponse;
import com.duruo.po.Qchuang;
import com.duruo.vo.QchaungVO;

import java.util.List;

/**
 * Created by @Author tachai
 * date 2018/9/14 19:03
 * GitHub https://github.com/TACHAI
 * Email 1206966083@qq.com
 */
public interface IQchuangService {
    ServerResponse<String> add(Qchuang qchuang);
    ServerResponse<String> update(Qchuang qchuang);
    ServerResponse<String> del(String id);
    ServerResponse<List<QchaungVO>> list(String companyName, String startTime, String endTime);

    ServerResponse<List<QchaungVO>> donelist(String companyName, String startTime, String endTime);
}
