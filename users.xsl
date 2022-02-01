<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body style="text-align:center">
                <h2>User Database for CDPL Citation Generator</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>cid</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nationality</th>
                        <th>Designation</th>
                        <th>Email ID</th>
                        <th>Contact</th>
                    </tr>
                    <xsl:for-each select="citation_generator/user">
                        <xsl:sort select="cid"/>
                        <tr>
                            <td>
                                <xsl:value-of select="cid"/>
                            </td>
                            <td>
                                <xsl:value-of select="name"/>
                            </td>
                            <xsl:choose>
                                <xsl:when test="age &gt; 40">
                                    <td bgcolor="#e9967a">
                                        <xsl:value-of select="age"/>
                                    </td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td bgcolor="#0fc1d899">
                                        <xsl:value-of select="age"/>
                                    </td>
                                </xsl:otherwise>
                            </xsl:choose>
                            <td>
                                <xsl:value-of select="nationality"/>
                            </td>
                            <xsl:template match="designation">
                                <td style="color:#00ff00">
                                    <xsl:value-of select="designation"/>
                                </td>
                            </xsl:template>
                            <td>
                                <xsl:value-of select="email"/>
                            </td>
                            <td>
                                <xsl:value-of select="contact"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>