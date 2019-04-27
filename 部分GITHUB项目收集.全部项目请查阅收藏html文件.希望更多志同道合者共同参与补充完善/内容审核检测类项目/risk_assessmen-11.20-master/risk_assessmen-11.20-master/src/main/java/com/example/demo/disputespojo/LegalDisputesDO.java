package com.example.demo.disputespojo;

import javax.persistence.*;
import java.util.Date;

@Entity
public class LegalDisputesDO {
    @Id
    @GeneratedValue
    private int id;
    private int monthnum;
    private Date date;

    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private AdministrativeDisputesDO administrativeDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private CasualtiesOutsideRoadDamageDisputesDO casualtiesOutsideRoadDamageDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private ConstructionContractDisputesDO constructionContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private FinancialDamageDisputesDO financialDamageDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private FreightTransportContractDisputesDO freightTransportContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private HouseDisputesDO houseDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private IntellectualPropertyDisputesDO intellectualPropertyDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private LaborDispatchingDisputesDO laborDispatchingDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private LandDisputesDO landDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private OtherContractDisputesDO otherContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private OtherDamageDisputesDO otherDamageDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private OtherLaborDisputesDO otherLaborDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private OtherPropertyDisputesDO otherPropertyDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private PassengerTransportContractDisputesDO passengerTransportContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private RailwayEmployeesLaborDisputesDO railwayEmployeesLaborDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private RailwayEmployeesRetireDisputesDO railwayEmployeesRetireDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private RentContractDisputesDO rentContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private SalePurchaseContractDisputesDO salePurchaseContractDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private StockDisputesDO stockDisputesDO;
    @OneToOne(cascade = {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.REMOVE})
    private TravelerDamageDisputesDO travelerDamageDisputesDO;

    public LegalDisputesDO() {
    }

    public LegalDisputesDO( int monthnum, Date date, AdministrativeDisputesDO administrativeDisputesDO, CasualtiesOutsideRoadDamageDisputesDO casualtiesOutsideRoadDamageDisputesDO, ConstructionContractDisputesDO constructionContractDisputesDO, FinancialDamageDisputesDO financialDamageDisputesDO, FreightTransportContractDisputesDO freightTransportContractDisputesDO, HouseDisputesDO houseDisputesDO, IntellectualPropertyDisputesDO intellectualPropertyDisputesDO, LaborDispatchingDisputesDO laborDispatchingDisputesDO, LandDisputesDO landDisputesDO, OtherContractDisputesDO otherContractDisputesDO, OtherDamageDisputesDO otherDamageDisputesDO, OtherLaborDisputesDO otherLaborDisputesDO, OtherPropertyDisputesDO otherPropertyDisputesDO, PassengerTransportContractDisputesDO passengerTransportContractDisputesDO, RailwayEmployeesLaborDisputesDO railwayEmployeesLaborDisputesDO, RailwayEmployeesRetireDisputesDO railwayEmployeesRetireDisputesDO, RentContractDisputesDO rentContractDisputesDO, SalePurchaseContractDisputesDO salePurchaseContractDisputesDO, StockDisputesDO stockDisputesDO, TravelerDamageDisputesDO travelerDamageDisputesDO) {
        this.monthnum = monthnum;
        this.date = date;
        this.administrativeDisputesDO = administrativeDisputesDO;
        this.casualtiesOutsideRoadDamageDisputesDO = casualtiesOutsideRoadDamageDisputesDO;
        this.constructionContractDisputesDO = constructionContractDisputesDO;
        this.financialDamageDisputesDO = financialDamageDisputesDO;
        this.freightTransportContractDisputesDO = freightTransportContractDisputesDO;
        this.houseDisputesDO = houseDisputesDO;
        this.intellectualPropertyDisputesDO = intellectualPropertyDisputesDO;
        this.laborDispatchingDisputesDO = laborDispatchingDisputesDO;
        this.landDisputesDO = landDisputesDO;
        this.otherContractDisputesDO = otherContractDisputesDO;
        this.otherDamageDisputesDO = otherDamageDisputesDO;
        this.otherLaborDisputesDO = otherLaborDisputesDO;
        this.otherPropertyDisputesDO = otherPropertyDisputesDO;
        this.passengerTransportContractDisputesDO = passengerTransportContractDisputesDO;
        this.railwayEmployeesLaborDisputesDO = railwayEmployeesLaborDisputesDO;
        this.railwayEmployeesRetireDisputesDO = railwayEmployeesRetireDisputesDO;
        this.rentContractDisputesDO = rentContractDisputesDO;
        this.salePurchaseContractDisputesDO = salePurchaseContractDisputesDO;
        this.stockDisputesDO = stockDisputesDO;
        this.travelerDamageDisputesDO = travelerDamageDisputesDO;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMonthnum() {
        return monthnum;
    }

    public void setMonthnum(int monthnum) {
        this.monthnum = monthnum;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public AdministrativeDisputesDO getAdministrativeDisputesDO() {
        return administrativeDisputesDO;
    }

    public void setAdministrativeDisputesDO(AdministrativeDisputesDO administrativeDisputesDO) {
        this.administrativeDisputesDO = administrativeDisputesDO;
    }

    public CasualtiesOutsideRoadDamageDisputesDO getCasualtiesOutsideRoadDamageDisputesDO() {
        return casualtiesOutsideRoadDamageDisputesDO;
    }

    public void setCasualtiesOutsideRoadDamageDisputesDO(CasualtiesOutsideRoadDamageDisputesDO casualtiesOutsideRoadDamageDisputesDO) {
        this.casualtiesOutsideRoadDamageDisputesDO = casualtiesOutsideRoadDamageDisputesDO;
    }

    public ConstructionContractDisputesDO getConstructionContractDisputesDO() {
        return constructionContractDisputesDO;
    }

    public void setConstructionContractDisputesDO(ConstructionContractDisputesDO constructionContractDisputesDO) {
        this.constructionContractDisputesDO = constructionContractDisputesDO;
    }

    public FinancialDamageDisputesDO getFinancialDamageDisputesDO() {
        return financialDamageDisputesDO;
    }

    public void setFinancialDamageDisputesDO(FinancialDamageDisputesDO financialDamageDisputesDO) {
        this.financialDamageDisputesDO = financialDamageDisputesDO;
    }

    public FreightTransportContractDisputesDO getFreightTransportContractDisputesDO() {
        return freightTransportContractDisputesDO;
    }

    public void setFreightTransportContractDisputesDO(FreightTransportContractDisputesDO freightTransportContractDisputesDO) {
        this.freightTransportContractDisputesDO = freightTransportContractDisputesDO;
    }

    public HouseDisputesDO getHouseDisputesDO() {
        return houseDisputesDO;
    }

    public void setHouseDisputesDO(HouseDisputesDO houseDisputesDO) {
        this.houseDisputesDO = houseDisputesDO;
    }

    public IntellectualPropertyDisputesDO getIntellectualPropertyDisputesDO() {
        return intellectualPropertyDisputesDO;
    }

    public void setIntellectualPropertyDisputesDO(IntellectualPropertyDisputesDO intellectualPropertyDisputesDO) {
        this.intellectualPropertyDisputesDO = intellectualPropertyDisputesDO;
    }

    public LaborDispatchingDisputesDO getLaborDispatchingDisputesDO() {
        return laborDispatchingDisputesDO;
    }

    public void setLaborDispatchingDisputesDO(LaborDispatchingDisputesDO laborDispatchingDisputesDO) {
        this.laborDispatchingDisputesDO = laborDispatchingDisputesDO;
    }

    public LandDisputesDO getLandDisputesDO() {
        return landDisputesDO;
    }

    public void setLandDisputesDO(LandDisputesDO landDisputesDO) {
        this.landDisputesDO = landDisputesDO;
    }

    public OtherContractDisputesDO getOtherContractDisputesDO() {
        return otherContractDisputesDO;
    }

    public void setOtherContractDisputesDO(OtherContractDisputesDO otherContractDisputesDO) {
        this.otherContractDisputesDO = otherContractDisputesDO;
    }

    public OtherDamageDisputesDO getOtherDamageDisputesDO() {
        return otherDamageDisputesDO;
    }

    public void setOtherDamageDisputesDO(OtherDamageDisputesDO otherDamageDisputesDO) {
        this.otherDamageDisputesDO = otherDamageDisputesDO;
    }

    public OtherLaborDisputesDO getOtherLaborDisputesDO() {
        return otherLaborDisputesDO;
    }

    public void setOtherLaborDisputesDO(OtherLaborDisputesDO otherLaborDisputesDO) {
        this.otherLaborDisputesDO = otherLaborDisputesDO;
    }


    public OtherPropertyDisputesDO getOtherPropertyDisputesDO() {
        return otherPropertyDisputesDO;
    }

    public void setOtherPropertyDisputesDO(OtherPropertyDisputesDO otherPropertyDisputesDO) {
        this.otherPropertyDisputesDO = otherPropertyDisputesDO;
    }

    public PassengerTransportContractDisputesDO getPassengerTransportContractDisputesDO() {
        return passengerTransportContractDisputesDO;
    }

    public void setPassengerTransportContractDisputesDO(PassengerTransportContractDisputesDO passengerTransportContractDisputesDO) {
        this.passengerTransportContractDisputesDO = passengerTransportContractDisputesDO;
    }

    public RailwayEmployeesLaborDisputesDO getRailwayEmployeesLaborDisputesDO() {
        return railwayEmployeesLaborDisputesDO;
    }

    public void setRailwayEmployeesLaborDisputesDO(RailwayEmployeesLaborDisputesDO railwayEmployeesLaborDisputesDO) {
        this.railwayEmployeesLaborDisputesDO = railwayEmployeesLaborDisputesDO;
    }

    public RailwayEmployeesRetireDisputesDO getRailwayEmployeesRetireDisputesDO() {
        return railwayEmployeesRetireDisputesDO;
    }

    public void setRailwayEmployeesRetireDisputesDO(RailwayEmployeesRetireDisputesDO railwayEmployeesRetireDisputesDO) {
        this.railwayEmployeesRetireDisputesDO = railwayEmployeesRetireDisputesDO;
    }

    public RentContractDisputesDO getRentContractDisputesDO() {
        return rentContractDisputesDO;
    }

    public void setRentContractDisputesDO(RentContractDisputesDO rentContractDisputesDO) {
        this.rentContractDisputesDO = rentContractDisputesDO;
    }

    public SalePurchaseContractDisputesDO getSalePurchaseContractDisputesDO() {
        return salePurchaseContractDisputesDO;
    }

    public void setSalePurchaseContractDisputesDO(SalePurchaseContractDisputesDO salePurchaseContractDisputesDO) {
        this.salePurchaseContractDisputesDO = salePurchaseContractDisputesDO;
    }

    public StockDisputesDO getStockDisputesDO() {
        return stockDisputesDO;
    }

    public void setStockDisputesDO(StockDisputesDO stockDisputesDO) {
        this.stockDisputesDO = stockDisputesDO;
    }

    public TravelerDamageDisputesDO getTravelerDamageDisputesDO() {
        return travelerDamageDisputesDO;
    }

    public void setTravelerDamageDisputesDO(TravelerDamageDisputesDO travelerDamageDisputesDO) {
        this.travelerDamageDisputesDO = travelerDamageDisputesDO;
    }
}
