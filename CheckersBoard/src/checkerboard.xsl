<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                version="2.0">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>CheckerBoard</title>
                <link rel="stylesheet" type="text/css" href="../checkerboard.css"/>
                <script type="text/javascript" src="../checkerboard.js"></script>
            </head>
            <body align="center">
                <h1 align="center">Checker Board Demo</h1>
                <table width="300" height="300" border="1" align="center">
                    <xsl:for-each select="checkerboard/square_group">
                        <tr>
                            <xsl:for-each select="square">
                                <xsl:choose>
                                    <xsl:when test="(squarenumber/text())mod 2 = 1">
                                        <td bgcolor="" width="100" height="100" class="button1" id="button1">
                                            <a href="#" onclick="clear(this.innerHTML = ' ')" id="{squarenumber[.]}">
                                            </a>
                                        </td>
                                    </xsl:when>
                                    <xsl:when test="(squarenumber/text())mod 2 = 0">
                                        <td bgcolor="" width="100" height="100" class="button2" id="button2">
                                            <a href="#" onclick="clear(this.innerHTML = ' ')" id="{squarenumber[.]}"> 
                                            </a>
                                        </td>
                                    </xsl:when>
                                </xsl:choose>
                            </xsl:for-each>
                        </tr>
                    </xsl:for-each>
                </table>
                <br/>
                <br/>
                
                <table width="300" align="center">
                    <tr>
                        <td colspan="2">
                            Input names below:
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <xsl:call-template name="namefield1"/>
                        </td>
                        <td>
                            <xsl:call-template name="namefield2"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <xsl:call-template name="button"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="square_group">
        <xsl:apply-templates select="square"></xsl:apply-templates>
    </xsl:template>
    <xsl:template match="square">
        <xsl:apply-templates select="squarenumber"></xsl:apply-templates>
    </xsl:template>
    <xsl:template name="namefield1">
        <input type="text" name="namefield1" id="namefield1"/>
    </xsl:template>
    <xsl:template name="namefield2">
        <input type="text" name="namefield2" id="namefield2"/>
    </xsl:template>
    <xsl:template name="button">
        <input type="button" value="Start" onclick="showChecker()"/>
    </xsl:template>
</xsl:stylesheet>