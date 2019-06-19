package com.example.demo;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.example.demo.disputespojo.*;
import com.example.demo.service.LegalDisputesService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LegalDIsputesApplication {
    @Autowired
    LegalDisputesService legalDisputesService;
    @Test
    public void saveLegalDisputes(){
        LegalDisputesDO legalDisputesDO=new LegalDisputesDO();
        legalDisputesDO.setDate(new Date());
        legalDisputesDO.setMonthnum(1);
        legalDisputesDO.setAdministrativeDisputesDO(new AdministrativeDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setCasualtiesOutsideRoadDamageDisputesDO(new CasualtiesOutsideRoadDamageDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setConstructionContractDisputesDO(new ConstructionContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setFinancialDamageDisputesDO(new FinancialDamageDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setFreightTransportContractDisputesDO(new FreightTransportContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setRailwayEmployeesLaborDisputesDO(new RailwayEmployeesLaborDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setHouseDisputesDO(new HouseDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setIntellectualPropertyDisputesDO(new IntellectualPropertyDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setLaborDispatchingDisputesDO(new LaborDispatchingDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setLandDisputesDO(new LandDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setOtherContractDisputesDO(new OtherContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setOtherDamageDisputesDO(new OtherDamageDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setOtherLaborDisputesDO(new OtherLaborDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setOtherPropertyDisputesDO(new OtherPropertyDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setPassengerTransportContractDisputesDO(new PassengerTransportContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setRailwayEmployeesRetireDisputesDO(new RailwayEmployeesRetireDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setRentContractDisputesDO(new RentContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setSalePurchaseContractDisputesDO(new SalePurchaseContractDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setStockDisputesDO(new StockDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesDO.setTravelerDamageDisputesDO(new TravelerDamageDisputesDO(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1));
        legalDisputesService.saveLegalDisputes(legalDisputesDO);
    }
//    @Test
//    public void findlegaldisputes(){
//        LegalDisputesDO legalDisputesDO=legalDisputesService.findLegalDisputes(1);
//        System.out.println(JSON.toJSON(legalDisputesDO));
//        String str=JSON.toJSONString(legalDisputesDO);
//        JSONArray jsonArray =new JSONArray();
//        System.out.println(json.get);
//    }
    @Test
    public void findiniinfo(HttpServletRequest httpServletRequest){
        System.out.println(httpServletRequest.getServletContext().getInitParameter("encoding"));
    }

}
