
package com.duruo.webserviceClient.xuhuisms;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the xuhuisms package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Receive_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "receive");
    private final static QName _GetSendMessageIdByRequestId_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendMessageIdByRequestId");
    private final static QName _SendSpSMSResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendSpSMSResponse");
    private final static QName _CheckSessionResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "checkSessionResponse");
    private final static QName _GetReceiveFileAttachmentResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getReceiveFileAttachmentResponse");
    private final static QName _GetSendMessageIdByRequestIdResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendMessageIdByRequestIdResponse");
    private final static QName _Login_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "login");
    private final static QName _SendHugeSmsResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendHugeSmsResponse");
    private final static QName _GetReceiveFileAttachment_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getReceiveFileAttachment");
    private final static QName _ReceiveResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "receiveResponse");
    private final static QName _CheckSession_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "checkSession");
    private final static QName _SendFax_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendFax");
    private final static QName _SendFaxResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendFaxResponse");
    private final static QName _LogoffResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "logoffResponse");
    private final static QName _ReceiveSMS_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "receiveSMS");
    private final static QName _ReceiveSMSResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "receiveSMSResponse");
    private final static QName _SendSMS_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendSMS");
    private final static QName _SendSpSMS_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendSpSMS");
    private final static QName _SendVoice_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendVoice");
    private final static QName _Logoff_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "logoff");
    private final static QName _SendProxySMSResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendProxySMSResponse");
    private final static QName _GetNotificationsResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getNotificationsResponse");
    private final static QName _SendEmail_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendEmail");
    private final static QName _GetSendRequestId_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendRequestId");
    private final static QName _SendSMSResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendSMSResponse");
    private final static QName _GetSendMessageIdByTaskIdResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendMessageIdByTaskIdResponse");
    private final static QName _SendEmailResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendEmailResponse");
    private final static QName _GetNotifications_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getNotifications");
    private final static QName _SendVoiceResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendVoiceResponse");
    private final static QName _SendHugeSms_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendHugeSms");
    private final static QName _LoginResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "loginResponse");
    private final static QName _GetNotificationListResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getNotificationListResponse");
    private final static QName _GetNotificationList_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getNotificationList");
    private final static QName _SendProxySMS_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "sendProxySMS");
    private final static QName _GetSendMessageIdByTaskId_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendMessageIdByTaskId");
    private final static QName _GetSendRequestIdResponse_QNAME = new QName("http://cxf.service.webucp.wondersgroup.com/", "getSendRequestIdResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: xuhuisms
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link SendHugeSms }
     * 
     */
    public SendHugeSms createSendHugeSms() {
        return new SendHugeSms();
    }

    /**
     * Create an instance of {@link GetSendMessageIdByRequestIdResponse }
     * 
     */
    public GetSendMessageIdByRequestIdResponse createGetSendMessageIdByRequestIdResponse() {
        return new GetSendMessageIdByRequestIdResponse();
    }

    /**
     * Create an instance of {@link Receive }
     * 
     */
    public Receive createReceive() {
        return new Receive();
    }

    /**
     * Create an instance of {@link SendVoiceResponse }
     * 
     */
    public SendVoiceResponse createSendVoiceResponse() {
        return new SendVoiceResponse();
    }

    /**
     * Create an instance of {@link Login }
     * 
     */
    public Login createLogin() {
        return new Login();
    }

    /**
     * Create an instance of {@link ReceiveSMS }
     * 
     */
    public ReceiveSMS createReceiveSMS() {
        return new ReceiveSMS();
    }

    /**
     * Create an instance of {@link ReceiveSMSResponse }
     * 
     */
    public ReceiveSMSResponse createReceiveSMSResponse() {
        return new ReceiveSMSResponse();
    }

    /**
     * Create an instance of {@link GetSendMessageIdByTaskId }
     * 
     */
    public GetSendMessageIdByTaskId createGetSendMessageIdByTaskId() {
        return new GetSendMessageIdByTaskId();
    }

    /**
     * Create an instance of {@link CheckSessionResponse }
     * 
     */
    public CheckSessionResponse createCheckSessionResponse() {
        return new CheckSessionResponse();
    }

    /**
     * Create an instance of {@link LogoffResponse }
     * 
     */
    public LogoffResponse createLogoffResponse() {
        return new LogoffResponse();
    }

    /**
     * Create an instance of {@link ReceiveResponse }
     * 
     */
    public ReceiveResponse createReceiveResponse() {
        return new ReceiveResponse();
    }

    /**
     * Create an instance of {@link Logoff }
     * 
     */
    public Logoff createLogoff() {
        return new Logoff();
    }

    /**
     * Create an instance of {@link GetSendMessageIdByTaskIdResponse }
     * 
     */
    public GetSendMessageIdByTaskIdResponse createGetSendMessageIdByTaskIdResponse() {
        return new GetSendMessageIdByTaskIdResponse();
    }

    /**
     * Create an instance of {@link GetNotificationListResponse }
     * 
     */
    public GetNotificationListResponse createGetNotificationListResponse() {
        return new GetNotificationListResponse();
    }

    /**
     * Create an instance of {@link SendFaxResponse }
     * 
     */
    public SendFaxResponse createSendFaxResponse() {
        return new SendFaxResponse();
    }

    /**
     * Create an instance of {@link CheckSession }
     * 
     */
    public CheckSession createCheckSession() {
        return new CheckSession();
    }

    /**
     * Create an instance of {@link SendSpSMS }
     * 
     */
    public SendSpSMS createSendSpSMS() {
        return new SendSpSMS();
    }

    /**
     * Create an instance of {@link SendSMS }
     * 
     */
    public SendSMS createSendSMS() {
        return new SendSMS();
    }

    /**
     * Create an instance of {@link GetReceiveFileAttachment }
     * 
     */
    public GetReceiveFileAttachment createGetReceiveFileAttachment() {
        return new GetReceiveFileAttachment();
    }

    /**
     * Create an instance of {@link SendFax }
     * 
     */
    public SendFax createSendFax() {
        return new SendFax();
    }

    /**
     * Create an instance of {@link GetNotifications }
     * 
     */
    public GetNotifications createGetNotifications() {
        return new GetNotifications();
    }

    /**
     * Create an instance of {@link GetSendMessageIdByRequestId }
     * 
     */
    public GetSendMessageIdByRequestId createGetSendMessageIdByRequestId() {
        return new GetSendMessageIdByRequestId();
    }

    /**
     * Create an instance of {@link SendSMSResponse }
     * 
     */
    public SendSMSResponse createSendSMSResponse() {
        return new SendSMSResponse();
    }

    /**
     * Create an instance of {@link GetReceiveFileAttachmentResponse }
     * 
     */
    public GetReceiveFileAttachmentResponse createGetReceiveFileAttachmentResponse() {
        return new GetReceiveFileAttachmentResponse();
    }

    /**
     * Create an instance of {@link SendProxySMS }
     * 
     */
    public SendProxySMS createSendProxySMS() {
        return new SendProxySMS();
    }

    /**
     * Create an instance of {@link GetSendRequestIdResponse }
     * 
     */
    public GetSendRequestIdResponse createGetSendRequestIdResponse() {
        return new GetSendRequestIdResponse();
    }

    /**
     * Create an instance of {@link SendEmailResponse }
     * 
     */
    public SendEmailResponse createSendEmailResponse() {
        return new SendEmailResponse();
    }

    /**
     * Create an instance of {@link GetSendRequestId }
     * 
     */
    public GetSendRequestId createGetSendRequestId() {
        return new GetSendRequestId();
    }

    /**
     * Create an instance of {@link SendVoice }
     * 
     */
    public SendVoice createSendVoice() {
        return new SendVoice();
    }

    /**
     * Create an instance of {@link SendEmail }
     * 
     */
    public SendEmail createSendEmail() {
        return new SendEmail();
    }

    /**
     * Create an instance of {@link GetNotificationList }
     * 
     */
    public GetNotificationList createGetNotificationList() {
        return new GetNotificationList();
    }

    /**
     * Create an instance of {@link SendProxySMSResponse }
     * 
     */
    public SendProxySMSResponse createSendProxySMSResponse() {
        return new SendProxySMSResponse();
    }

    /**
     * Create an instance of {@link SendHugeSmsResponse }
     * 
     */
    public SendHugeSmsResponse createSendHugeSmsResponse() {
        return new SendHugeSmsResponse();
    }

    /**
     * Create an instance of {@link SendSpSMSResponse }
     * 
     */
    public SendSpSMSResponse createSendSpSMSResponse() {
        return new SendSpSMSResponse();
    }

    /**
     * Create an instance of {@link GetNotificationsResponse }
     * 
     */
    public GetNotificationsResponse createGetNotificationsResponse() {
        return new GetNotificationsResponse();
    }

    /**
     * Create an instance of {@link LoginResponse }
     * 
     */
    public LoginResponse createLoginResponse() {
        return new LoginResponse();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Receive }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "receive")
    public JAXBElement<Receive> createReceive(Receive value) {
        return new JAXBElement<Receive>(_Receive_QNAME, Receive.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendMessageIdByRequestId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendMessageIdByRequestId")
    public JAXBElement<GetSendMessageIdByRequestId> createGetSendMessageIdByRequestId(GetSendMessageIdByRequestId value) {
        return new JAXBElement<GetSendMessageIdByRequestId>(_GetSendMessageIdByRequestId_QNAME, GetSendMessageIdByRequestId.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendSpSMSResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendSpSMSResponse")
    public JAXBElement<SendSpSMSResponse> createSendSpSMSResponse(SendSpSMSResponse value) {
        return new JAXBElement<SendSpSMSResponse>(_SendSpSMSResponse_QNAME, SendSpSMSResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CheckSessionResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "checkSessionResponse")
    public JAXBElement<CheckSessionResponse> createCheckSessionResponse(CheckSessionResponse value) {
        return new JAXBElement<CheckSessionResponse>(_CheckSessionResponse_QNAME, CheckSessionResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReceiveFileAttachmentResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getReceiveFileAttachmentResponse")
    public JAXBElement<GetReceiveFileAttachmentResponse> createGetReceiveFileAttachmentResponse(GetReceiveFileAttachmentResponse value) {
        return new JAXBElement<GetReceiveFileAttachmentResponse>(_GetReceiveFileAttachmentResponse_QNAME, GetReceiveFileAttachmentResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendMessageIdByRequestIdResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendMessageIdByRequestIdResponse")
    public JAXBElement<GetSendMessageIdByRequestIdResponse> createGetSendMessageIdByRequestIdResponse(GetSendMessageIdByRequestIdResponse value) {
        return new JAXBElement<GetSendMessageIdByRequestIdResponse>(_GetSendMessageIdByRequestIdResponse_QNAME, GetSendMessageIdByRequestIdResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Login }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "login")
    public JAXBElement<Login> createLogin(Login value) {
        return new JAXBElement<Login>(_Login_QNAME, Login.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendHugeSmsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendHugeSmsResponse")
    public JAXBElement<SendHugeSmsResponse> createSendHugeSmsResponse(SendHugeSmsResponse value) {
        return new JAXBElement<SendHugeSmsResponse>(_SendHugeSmsResponse_QNAME, SendHugeSmsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReceiveFileAttachment }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getReceiveFileAttachment")
    public JAXBElement<GetReceiveFileAttachment> createGetReceiveFileAttachment(GetReceiveFileAttachment value) {
        return new JAXBElement<GetReceiveFileAttachment>(_GetReceiveFileAttachment_QNAME, GetReceiveFileAttachment.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReceiveResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "receiveResponse")
    public JAXBElement<ReceiveResponse> createReceiveResponse(ReceiveResponse value) {
        return new JAXBElement<ReceiveResponse>(_ReceiveResponse_QNAME, ReceiveResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CheckSession }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "checkSession")
    public JAXBElement<CheckSession> createCheckSession(CheckSession value) {
        return new JAXBElement<CheckSession>(_CheckSession_QNAME, CheckSession.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendFax }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendFax")
    public JAXBElement<SendFax> createSendFax(SendFax value) {
        return new JAXBElement<SendFax>(_SendFax_QNAME, SendFax.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendFaxResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendFaxResponse")
    public JAXBElement<SendFaxResponse> createSendFaxResponse(SendFaxResponse value) {
        return new JAXBElement<SendFaxResponse>(_SendFaxResponse_QNAME, SendFaxResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LogoffResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "logoffResponse")
    public JAXBElement<LogoffResponse> createLogoffResponse(LogoffResponse value) {
        return new JAXBElement<LogoffResponse>(_LogoffResponse_QNAME, LogoffResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReceiveSMS }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "receiveSMS")
    public JAXBElement<ReceiveSMS> createReceiveSMS(ReceiveSMS value) {
        return new JAXBElement<ReceiveSMS>(_ReceiveSMS_QNAME, ReceiveSMS.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReceiveSMSResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "receiveSMSResponse")
    public JAXBElement<ReceiveSMSResponse> createReceiveSMSResponse(ReceiveSMSResponse value) {
        return new JAXBElement<ReceiveSMSResponse>(_ReceiveSMSResponse_QNAME, ReceiveSMSResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendSMS }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendSMS")
    public JAXBElement<SendSMS> createSendSMS(SendSMS value) {
        return new JAXBElement<SendSMS>(_SendSMS_QNAME, SendSMS.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendSpSMS }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendSpSMS")
    public JAXBElement<SendSpSMS> createSendSpSMS(SendSpSMS value) {
        return new JAXBElement<SendSpSMS>(_SendSpSMS_QNAME, SendSpSMS.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendVoice }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendVoice")
    public JAXBElement<SendVoice> createSendVoice(SendVoice value) {
        return new JAXBElement<SendVoice>(_SendVoice_QNAME, SendVoice.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Logoff }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "logoff")
    public JAXBElement<Logoff> createLogoff(Logoff value) {
        return new JAXBElement<Logoff>(_Logoff_QNAME, Logoff.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendProxySMSResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendProxySMSResponse")
    public JAXBElement<SendProxySMSResponse> createSendProxySMSResponse(SendProxySMSResponse value) {
        return new JAXBElement<SendProxySMSResponse>(_SendProxySMSResponse_QNAME, SendProxySMSResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetNotificationsResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getNotificationsResponse")
    public JAXBElement<GetNotificationsResponse> createGetNotificationsResponse(GetNotificationsResponse value) {
        return new JAXBElement<GetNotificationsResponse>(_GetNotificationsResponse_QNAME, GetNotificationsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendEmail }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendEmail")
    public JAXBElement<SendEmail> createSendEmail(SendEmail value) {
        return new JAXBElement<SendEmail>(_SendEmail_QNAME, SendEmail.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendRequestId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendRequestId")
    public JAXBElement<GetSendRequestId> createGetSendRequestId(GetSendRequestId value) {
        return new JAXBElement<GetSendRequestId>(_GetSendRequestId_QNAME, GetSendRequestId.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendSMSResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendSMSResponse")
    public JAXBElement<SendSMSResponse> createSendSMSResponse(SendSMSResponse value) {
        return new JAXBElement<SendSMSResponse>(_SendSMSResponse_QNAME, SendSMSResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendMessageIdByTaskIdResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendMessageIdByTaskIdResponse")
    public JAXBElement<GetSendMessageIdByTaskIdResponse> createGetSendMessageIdByTaskIdResponse(GetSendMessageIdByTaskIdResponse value) {
        return new JAXBElement<GetSendMessageIdByTaskIdResponse>(_GetSendMessageIdByTaskIdResponse_QNAME, GetSendMessageIdByTaskIdResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendEmailResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendEmailResponse")
    public JAXBElement<SendEmailResponse> createSendEmailResponse(SendEmailResponse value) {
        return new JAXBElement<SendEmailResponse>(_SendEmailResponse_QNAME, SendEmailResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetNotifications }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getNotifications")
    public JAXBElement<GetNotifications> createGetNotifications(GetNotifications value) {
        return new JAXBElement<GetNotifications>(_GetNotifications_QNAME, GetNotifications.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendVoiceResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendVoiceResponse")
    public JAXBElement<SendVoiceResponse> createSendVoiceResponse(SendVoiceResponse value) {
        return new JAXBElement<SendVoiceResponse>(_SendVoiceResponse_QNAME, SendVoiceResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendHugeSms }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendHugeSms")
    public JAXBElement<SendHugeSms> createSendHugeSms(SendHugeSms value) {
        return new JAXBElement<SendHugeSms>(_SendHugeSms_QNAME, SendHugeSms.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LoginResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "loginResponse")
    public JAXBElement<LoginResponse> createLoginResponse(LoginResponse value) {
        return new JAXBElement<LoginResponse>(_LoginResponse_QNAME, LoginResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetNotificationListResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getNotificationListResponse")
    public JAXBElement<GetNotificationListResponse> createGetNotificationListResponse(GetNotificationListResponse value) {
        return new JAXBElement<GetNotificationListResponse>(_GetNotificationListResponse_QNAME, GetNotificationListResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetNotificationList }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getNotificationList")
    public JAXBElement<GetNotificationList> createGetNotificationList(GetNotificationList value) {
        return new JAXBElement<GetNotificationList>(_GetNotificationList_QNAME, GetNotificationList.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SendProxySMS }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "sendProxySMS")
    public JAXBElement<SendProxySMS> createSendProxySMS(SendProxySMS value) {
        return new JAXBElement<SendProxySMS>(_SendProxySMS_QNAME, SendProxySMS.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendMessageIdByTaskId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendMessageIdByTaskId")
    public JAXBElement<GetSendMessageIdByTaskId> createGetSendMessageIdByTaskId(GetSendMessageIdByTaskId value) {
        return new JAXBElement<GetSendMessageIdByTaskId>(_GetSendMessageIdByTaskId_QNAME, GetSendMessageIdByTaskId.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSendRequestIdResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://cxf.service.webucp.wondersgroup.com/", name = "getSendRequestIdResponse")
    public JAXBElement<GetSendRequestIdResponse> createGetSendRequestIdResponse(GetSendRequestIdResponse value) {
        return new JAXBElement<GetSendRequestIdResponse>(_GetSendRequestIdResponse_QNAME, GetSendRequestIdResponse.class, null, value);
    }

}
