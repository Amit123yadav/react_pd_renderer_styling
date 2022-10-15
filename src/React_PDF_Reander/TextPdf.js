import React from 'react'
import { Document, Page, Text, View, Font, StyleSheet, Image, Link } from '@react-pdf/renderer'
const TextPdf = () => {
    const styles = StyleSheet.create({
        header: {
            textAlign: 'center',
            margin: 20,
        },
        body: {
            margin: 10,
            flexGrow: 1,
        },
        row: {
            flexGrow: 1,
            flexDirection: 'row',
        },
        block: {
            flexGrow: 1,
        },
        text: {
            width: '60%',
            margin: 10,
            fontFamily: 'Oswald',
            textAlign: 'justify',
        },
        fill1: {
            width: '40%',
        },
        fill2: {
            flexGrow: 2,
        },
        fill3: {
            flexGrow: 2,
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
        },
    })
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
    });

    return (
        <Document>
            <Page size='A4'>
                <Link src='https://www.google.com' target="_blank">
                    <Text style={styles.header}>PDF Download</Text>
                </Link>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill1}>
                            <Image src='../img/img1.jpg' />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fill2} >
                            <Image src='../img/img2.jpg' />
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill3} >
                            <Image src='../img/img2.jpg' />
                        </View>
                    </View>
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
            <Page>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill1}>
                            <Image src='../img/img1.jpg' />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fill2} >
                            <Image src='../img/img2.jpg' />
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill3} >
                            <Image src='../img/img2.jpg' />
                        </View>
                    </View>
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
            <Page>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill1}>
                            <Image src='../img/img1.jpg' />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fill2} >
                            <Image src='../img/img2.jpg' />
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill3} >
                            <Image src='../img/img2.jpg' />
                        </View>
                    </View>
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
            <Page>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill1}>
                            <Image src='../img/img1.jpg' />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.fill2} >
                            <Image src='../img/img2.jpg' />
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum.
                        </Text>
                        <View style={styles.fill3} >
                            <Image src='../img/img2.jpg' />
                        </View>
                    </View>
                </View>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>

    )
}

export default TextPdf