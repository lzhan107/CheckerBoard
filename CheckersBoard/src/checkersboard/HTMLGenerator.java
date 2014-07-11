/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package checkersboard;

import java.io.IOException;
import java.io.InputStream;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;

/**
 *
 * @author Lei
 */
public class HTMLGenerator {

    private Document document;
    private InputStream xmlStream;
    private InputStream xslStream;
    private StreamSource styleSource;
    private DOMSource source;
    private StreamResult result;

    public void generateHTML() {
       try {
           //Create DOM builder factory
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            //Load xml & xsl source
            xmlStream = this.getClass().getClassLoader().getResourceAsStream("checkerboard.xml");
            xslStream = this.getClass().getClassLoader().getResourceAsStream("checkerboard.xsl");
            //Create DOM builder
            DocumentBuilder builder = factory.newDocumentBuilder();
            //Create DOM
            document = builder.parse(xmlStream);
            //Create transformer factory
            TransformerFactory tFactory = TransformerFactory.newInstance();
            //Load stream source from xsl stream
            styleSource = new StreamSource(xslStream);
            //Create transformer
            Transformer transformer = tFactory.newTransformer(styleSource);
            source = new DOMSource(document);
            result = new StreamResult("checkerboard.html");
            //Transform .xml to .html per .xsl file
            transformer.transform(source, result);
        } catch (TransformerException te) {
            System.out.println("\n** Transformation error");
            System.out.println("   " + te.getMessage());
            // Use the contained exception, if any
            Throwable x = te;
            if (te.getException() != null) {
                x = te.getException();
            }
        } catch (SAXException sxe) {
            System.out.println(sxe);
        } catch (IOException ioe) {
            System.out.println(ioe.getMessage());
        } catch (ParserConfigurationException pce) {
            System.out.println(pce.getMessage());
        } finally {
            if (xmlStream != null) {
                try {
                    xmlStream.close();
                } catch (IOException ex) {
                    System.out.println(ex);
                }
            }
            if (xslStream != null) {
                try {
                    xslStream.close();
                } catch (IOException ex) {
                    System.out.println(ex);
                }
            }
        }
    }
}
