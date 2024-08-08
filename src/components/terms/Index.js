import React from "react";
import PrivacyTermsContainer from "../common/PrivacyTermsContainer";
import SubPageHeroV2 from "../common/subpageherov2/SubPageHeroV2";
const breadCrumbs = [{ text: "Terms & Conditions" }];

const TermsPage = () => {
  return (
    <>
      <SubPageHeroV2 heading="Terms & Conditions" breadCrumbs={breadCrumbs} />
      <PrivacyTermsContainer
        privacyTerms={` <p>
            Lorem ipsum dolor sit amet consectetur. Tristique nec curabitur
            fermentum suspendisse. Orci enim suspendisse donec gravida vel enim
            eu adipiscing. Venenatis eget lectus aliquet et nulla elit. Sed
            aliquam imperdiet netus pulvinar neque semper. Congue feugiat dui
            aliquam ornare neque. Pellentesque ut quis nisl mi amet. Morbi
            ultricies tellus nec proin pulvinar nulla commodo. Quis lacus
            accumsan volutpat vulputate semper tristique sed. Viverra nec
            euismod nunc viverra mi. Eget morbi viverra augue faucibus non arcu.
            Sit nisl a velit sed aliquam enim. Sem mattis amet odio lobortis
            imperdiet vestibulum semper. Integer odio nulla hendrerit faucibus.
            Egestas iaculis gravida vitae ultrices in potenti mattis dis.
          </p>
          <br />
          <h5>Lorem ipsum dolor sit</h5>
          <p>
            At nunc velit semper mi ut tortor vestibulum iaculis a. Nunc id enim
            eu quam nisl sit nullam vitae fermentum. Vitae ullamcorper dictum
            lectus justo tincidunt massa ultrices. Sit cursus malesuada sed
            vulputate velit. Elementum sed odio hendrerit enim aliquet imperdiet
            faucibus facilisis semper. Nunc scelerisque varius mauris augue
            dolor quis. Ridiculus sit diam ultrices pretium. Blandit tristique
            est bibendum quis dictum eros. Proin pharetra est in tristique
            suspendisse. Sem augue mattis consectetur aliquam duis. Viverra
            luctus semper urna at ultrices hac tellus. Senectus quis luctus
            turpis iaculis id pretium.
          </p>
          <br />

          <h5>Lorem ipsum dolor sit</h5>
          <p>
            Congue dis at arcu duis elit vestibulum consequat. Sagittis aliquet
            pellentesque vitae platea vel iaculis cursus eu. Pulvinar senectus
            sit ornare mi. Odio ipsum aliquet et sed. Accumsan etiam posuere mi
            arcu ullamcorper nunc. Interdum quis sit viverra aliquet proin
            lorem. Enim non consequat vitae nibh eu cursus quis. Vel vitae
            aliquet amet tristique. Massa quis sapien dui enim eu tristique
            lectus. In etiam urna ultricies quis elementum pretium ut. Enim
            velit volutpat tempus egestas semper lacinia tempus nunc tempor.
          </p>
          <br />

          <h5>Lorem ipsum dolor sit</h5>
          <p>
            Pulvinar viverra consequat aliquet neque mattis pulvinar gravida
            bibendum eget. Vitae tempor tempor elementum tincidunt. Varius
            facilisis consequat ullamcorper lacus. Erat gravida vitae id ac
            donec. Nulla enim at elementum accumsan magna ornare. Erat blandit
            mattis urna varius pulvinar justo tincidunt. Condimentum neque
            faucibus vitae ut ultricies lobortis interdum. Quam euismod accumsan
            ullamcorper odio tincidunt. Lacinia mollis diam ullamcorper magna
            quis nisi orci eget sociis. Viverra at sed commodo mattis
            suspendisse scelerisque sit id gravida. Parturient sed elit molestie
            tristique nunc.
          </p>`}
      />
    </>
  );
};

export default TermsPage;
