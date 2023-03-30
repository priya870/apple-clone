import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const StoreFooter = () => {
  return (
    <Box>
      <Box width={"80%"} margin={"auto"} mt={"70px"}>
        <Text fontSize={"30px"} fontWeight={"600"}>
          Quick Links
        </Text>
        <Box width={"45%"} mt={"20px"}>
          <Flex justifyContent={"space-Between"}>
            <Box
              width={"30%"}
              borderRadius={"30px"}
              p={"8px"}
              bgColor="#e8e8ed"
            >
              <Text textAlign={"center"}>Order Status</Text>
            </Box>
            <Box
              width={"30%"}
              borderRadius={"30px"}
              p={"8px"}
              bgColor="#e8e8ed"
            >
              <Text textAlign={"center"}>Shopping Helps</Text>
            </Box>
            <Box
              width={"30%"}
              borderRadius={"30px"}
              p={"8px"}
              bgColor="#e8e8ed"
            >
              <Text textAlign={"center"}>Your Saves</Text>
            </Box>
          </Flex>
        </Box>

        <Text mt={"40px"} fontSize={"13px"} color={"grey"}>
          ◊◊ Monthly pricing is after purchase using EMI with qualifying cards
          at 14% pa over a 6 month tenure. Monthly pricing is rounded to the
          nearest rupee. Exact pricing will be provided by your bank, subject to
          your bank’s terms and conditions.
        </Text>
        <Text fontSize={"13px"} color={"grey"}>
          Based on purchase of ₹79900. Total amount payable ₹83194 paid over 6
          months as 6 monthly payments of ₹13866 at an interest rate of 14% pa.
          Total interest paid to bank: ₹3294.
        </Text>

       
        <Text mt={"5px"} fontSize={"14px"} color={"grey"}>
          Representative example:
        </Text>

        <Text fontSize={"13px"} color={"grey"}>
          § No Cost EMI is available with the purchase of an eligible product
          made using qualifying cards on 3- or 6-month tenures from most leading
          banks. Minimum order spend applies as per your card issuing bank
          threshold. Offer cannot be combined with Apple Store for Education or
          Corporate Employee Purchase Plan pricing. Card eligibility is subject
          to terms and conditions between you and your card–issuing bank. Offer
          may be revised or withdrawn at any time without any prior notice.
          Terms & Conditions apply.
        </Text>
        <Text mt={"5px"} fontSize={"13px"} color={"grey"}>
        Based off a 6 month tenure. ₹79900 total cost includes 15% pa and No Cost EMI savings of ₹3380, paid over 6 months as 6 monthly payments of ₹13317.
        </Text>

        <Text mt={"5px"} fontSize={"13px"} color={"grey"}>

1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
        </Text>

        <Text mt={"5px"} fontSize={"13px"} color={"grey"}>
        2. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.
        </Text>

        <Text mt={"10px"} fontSize={"14px"} color={"grey"} pb = {"30px"}>
        ‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).
        </Text>
      </Box>
    </Box>
  );
};

export default StoreFooter;
