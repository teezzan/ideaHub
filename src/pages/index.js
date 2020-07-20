import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// function getdata() {
//   console.log("here");

//   const url = 'https://randomuser.me/api';
//   // The data we are going to send in our request

//   fetch(url)
//     .then(function (response) {
//       // Handle response we get from the API
//       console.log(response);

//     })
// }
const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    {/* <button onClick={getdata}> getdata</button> */}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <p>
      AND9093/D
      Using MOSFETs in Load
      Switch Applications
      http://onsemi.com
      APPLICATION NOTE
      Introduction
      In today’s market, power management is more important
      than ever. Portable systems strive to extend battery life while
      meeting an ever increasing demand for higher performance.
      Load switches provide a simple and inexpensive method for
      the system to make the appropriate power management
      decisions based on which peripherals or sub-circuits are
      currently in use. Load switches are found in notebooks, cell
      phones, hand held gaming systems and many other portable
      devices.
      The load switch is controlled by the system, and connects
      or disconnects a voltage rail to a specific load. By turning
      unused circuitry off, the system as a whole can run more
      efficiently. The load switch provides a simple means to
      power a load when it is in demand and allows the system to
      maximize performance.
      for the same die area. Thus, for high current applications the
      N-channel transistor is preferred.
      When using an N-channel MOSFET in a load switch
      circuit, the drain is connected directly to the input voltage
      rail and the source is connected to the load. The output
      voltage is defined as the voltage across the load, and
      therefore:
      V S + V OUT
      In order for the N-channel MOSFET to turn on, the
      gate-to-source voltage must be greater than the threshold
      voltage of the device. This means that:
      V G w V OUT ) V th
      A load switch is comprised of two main elements: the pass
      transistor and the on/off control block, as shown in Figure 1.
      P-channel
      Load Switch
      +
      −
      Load
      On/Off
      Control
      Figure 1. Example Load Switch Circuit
      V IN w V G ) V th
      The pass transistor is most commonly a MOSFET (either
      N-channel or P-channel) that passes the voltage supply to
      a specified load when the transistor is on.
      The selection of a P-channel or N-channel load switch
      depends on the specific needs of the application. The
      N-channel MOSFET has several advantages over the
      P-channel MOSFET. For example, the N-channel majority
      carriers (electrons) have a higher mobility than the
      P-channel majority carriers (holes). Because of this, the
      N-channel transistor has lower R DS(on) and gate capacitance
      February, 2014 − Rev. 1
      (eq. 3)
      At minimum, the input voltage rail must be greater than
      the threshold voltage of the selected pass transistor
      (assuming the gate voltage is 0 V when the load switch is
      turned on).
      The P-channel MOSFET has a distinct advantage over the
      N-channel MOSFET, and that is in the simplicity of the
      on/off control block. The N-channel load switch requires an
      additional voltage rail for the gate; the P-channel load switch
      does not. As with the N-channel MOSFET, the designer
      must ensure that the device maximum ratings and the safe
      operating area of the P-channel MOSFET are not violated.
      N-channel and P-channel Considerations
      © Semiconductor Components Industries, LLC, 2014
      (eq. 2)
      In order to meet Equation 2, a second voltage rail is
      needed to control the gate. Therefore, the input voltage rail
      can be considered independently of the pass transistor.
      Because of this, the N-channel load switch can be used for
      very low input voltage rails or for higher voltage rails, as
      long as the gate-to-source voltage V GS remains higher than
      the threshold voltage of the device. The designer must
      ensure that the device maximum ratings and the safe
      operating area of the MOSFET are not violated.
      When using a P-channel MOSFET in a load switch circuit
      (as in Figure 1, the source is directly connected to the input
      voltage rail and the drain is connected to the load. In order
      for the P-channel load switch to turn on, the source-to-gate
      voltage must be greater than the threshold voltage.
      Therefore:
      Load Switch Basics
      VIN
      (eq. 1)
      1
      Publication Order Number:
      AND9093/DAND9093/D
      Load Switch Control Circuit Considerations
      source. As with the N-channel control circuit, resistor R1 is
      selected so that milliamps of current or less flow through R1
      when Q1 is on. A standard range is 1 kW – 10 kW.
      For both control circuit implementations, the small-signal
      NMOS transistor, Q1, can be integrated into the same
      package as the pass transistor.
      There are multiple ways to implement the on/off control
      block in a load switch circuit. This section will cover one
      control circuit example for the N-channel and one for the
      P-channel load switch.
      N-channel
      Load Switch
      +
      VIN
      VOUT
      Efficiency Considerations
      Efficiency is critical to the success of the overall power
      management of the system. In a load switch circuit, the load
      current flows directly through the pass transistor when it is
      turned on. Therefore, the main power loss is the conduction
      loss.
      Load
      R1
      −
      +
      VGATE
      −
      P LOSS + I LOAD 2 @ R DS(on)
      Q1
      EN
      The R DS(ON) of the pass transistor causes a voltage drop
      between the input voltage and the output voltage, as shown
      in Equation 5. For applications requiring high load currents
      or low voltage rails, this voltage drop becomes critical. The
      voltage drop will increase as the load current increases, and
      the voltage drop at maximum load must be taken into
      consideration when selecting the pass transistor.
      Figure 2. N-channel Example Control Circuit
      Figure 2 shows an example load switch control circuit for
      an N-channel pass transistor. A logic signal from the system
      power management control circuitry turns the load switch
      on and off via a small-signal NMOS transistor, Q1. When
      EN is LOW, Q1 is off and the pass transistor gate is pulled
      up to V GATE to keep it turned on. When EN is HIGH, Q1
      turns on, the pass transistor gate is pulled to ground, and the
      load switch turns off. Resistor R1 is selected so that
      milliamps of current or less flow through R1 when Q1 is on.
      A standard range is 1 kW – 10 kW.
      An additional voltage source, V GATE , is needed to keep
      the gate-to-source forward biased. As expressed in
      Equation 2, the gate voltage must be larger than the sum of
      the output voltage and the threshold voltage. This may be
      undesirable for systems that do not have an extra voltage rail
      available.
      P-channel
      Load Switch
      VIN
      V OUT + V IN * I LOAD @ R DS(on)
      (eq. 5)
      As discussed in previous sections, the N-channel
      MOSFET has an R DS(on) advantage over the P-channel
      MOSFET for a given die size. The R DS(on) of an N-channel
      device can be two times lower than the R DS(on) of
      a P-channel device of similar die area. This difference is
      most prominent at higher currents, but the N-channel
      R DS(on) advantage becomes less prominent at lower
      currents. For applications such as cell phones and other
      portable low power devices, higher efficiency can be
      attained using a P-channel pass transistor, with the
      advantage of a simpler control circuit.
      To illustrate this, let’s assume that a 30 mW N-channel
      transistor and a 50 mW P-channel transistor have similar die
      size. The efficiency impact of the two devices will be
      examined for a high current application and a low current
      application.
      For the first example, consider an application that requires
      a maximum load current of 10 A. Using Equations 4 and 5,
      the power loss at the maximum load is calculated to be 3 W
      for the N-channel transistor, and the voltage drop across the
      transistor is 300 mV. The power loss at the maximum load
      is 5 W for the P-channel transistor, and the voltage drop
      across the transistor is 500 mV.
      Now consider an application in which the maximum
      current is 2 A. The power loss at maximum load is 120 mW
      for the N-channel device and 200 mW for the p-channel
      device. The voltage drop for the N-channel transistor is
      60 mV and is 100 mV for the P-channel transistor.
      As a final example, consider an application with an
      850 mA maximum load current. The 30 mW N-channel
      transistor’s power loss is 21.7 mW compared to the
      36.1 mW power loss of the 50 mW P-channel transistor of
      similar die size. For low current applications, the N-channel
      VOUT
      R1
      +
      (eq. 4)
      Load
      −
      Q1
      EN
      Figure 3. P-channel Example Control Circuit
      Figure 3 shows an example load switch control circuit for
      a P-channel pass transistor. As with the N-channel example,
      a logic signal from the system power management control
      circuitry turns the load switch on and off via a small-signal
      NMOS transistor, Q1. When EN is LOW, Q1 is off and the
      gate is pulled up to V IN . When EN is HIGH, Q1 turns on, the
      pass transistor gate is pulled to ground, and the load switch
      turns on. As long as the input voltage rail is higher than the
      threshold voltage of the PMOS transistor, it will turn on
      when EN is HIGH without the need of an additional voltage
      http://onsemi.com
      2AND9093/D
      P-channel
      Load Switch
      R DS(ON) advantage becomes negligible. P-channel pass
      transistors can be designed to have R DS(on) as low as 8 mW.
      Low R DS(on) is critical for maximizing the efficiency of the
      load switch circuit and minimizing the voltage drop across
      the pass transistor. The specific conditions of the load switch
      application must be considered to make the final decision to
      use a PMOS or NMOS pass transistor.
      VIN
      +
      VOUT
      Load
      C1
      R2
      −
      C LOAD
      R1
      R LOAD
      Q1
      Gate-to-Source Voltage Considerations
      EN
      The applied gate-to-source voltage of the pass transistor
      directly affects the efficiency of the circuit because R DS(on)
      is inversely proportional to the applied gate-to-source
      voltage. Figure 4 shows an example R DS(on) curve over
      a V GS range.
      Figure 5. Load Switch with Capacitive Load
      When the load switch is first turned on, an inrush current
      event occurs on the input as the C LOAD is charged. This can
      be seen in Equation 6:
      I inrush + C LOAD @
      dV
      dt
      (eq. 6)
      The faster the device switches on, the higher the inrush
      current will be. This potentially harmful inrush current can
      be reduced by controlling the load switch turn-on
      characteristics.
      Figure 6 shows the simplified MOSFET turn-on transfer
      curves. There are four main regions for device turn-on, and
      each will be briefly addressed.
      Figure 4. Example R DS(on) vs. V GS Curve
      The available V GS of the circuit must be considered when
      selecting the pass transistor. Operating too close to the knee
      of the R DS(on) curve can lead to higher conduction losses.
      Any small change in the gate-to-source voltage could result
      in a large change in the R DS(on) .
      Turn-on Considerations
      Proper turn-on of the load switch pass transistor is critical
      for maximizing circuit performance and maintaining safe
      operation of the individual components. Optimal turn-on
      speed depends on the needs of the specific application and
      the device parameters of the selected load switch. If the
      turn-on speed is too fast, a transient current spike occurs on
      the input voltage supply, known as inrush current.
      Figure 6. MOSFET Turn-on Waveforms
      During Region 1, V SG increases until it reaches V TH .
      Because the device is off, V SD remains at V DD . During
      Region 2, V SG rises above the V TH and the device begins to
      turn on. Additionally, I D increases to the final load current
      and C GS charges.
      In Region 3, V SG remains constant as V SD decreases to its
      saturation level, and C GD charges. During Region 4, both
      C GS and C GD are fully charged, the device is fully on, and
      V SG rises to its final drive voltage, V DR . The plateau
      voltage, V PL ,is defined as:
      Inrush Current
      Inrush current occurs when the load switch is first turned
      on and is connected to a capacitive load, as shown in
      Figure 5. The capacitive load could be a battery, a DC:DC
      circuit, or other sub-circuit. The turn-on speed of the pass
      transistor directly influences the amount of inrush current
      seen on the input of the load switch.
      Inrush current causes a dip in the input supply voltage that
      can adversely impact the functionality of the entire system.
      Likewise, inrush current spikes can potentially damage the
      load switch circuit components or reduce the lifetime of the
      components.
      V PL + V th )
      http://onsemi.com
      3
      I LOAD
      g fs
      (eq. 7)AND9093/D
      In order to control the turn-on speed of the load switch, an
      external resistor R1 and external capacitor C1 are added to
      the load switch circuit as shown in Figure 7.
      P-channel
      Load Switch
      VIN
      +
      For many designs, the equivalent C LOAD may be an
      unknown. If this is the case, C LOAD can be estimated from
      the measured inrush current waveform of the circuit without
      the addition of R1 and C1. Figure 9 shows an example inrush
      current waveform for a load switch circuit similar to
      Figure 5.
      VOUT
      C1
      R2
      −
      C LOAD
      R LOAD
      R1
      Q1
      EN
      Figure 7. Inrush Current Limiting Circuit
      The selection of R1, R2 and C1 is very important to the
      performance of the load switch circuit. C1 must be much
      larger than the C GD of the load switch device so this
      capacitance will dominate over C GD . By placing C1
      between the drain and source of the pass transistor, Region 3
      of the V SD curve becomes linear and the MOSFET
      slew-rate, dV SD /dt, can be controlled.
      R1 and R2 form a voltage divider that determines the
      voltage seen at the gate of the pass transistor. R1 and R2 can
      be calculated by using Equation 8 when the small-signal
      N-channel device is on.
      R 1
      R 1 ) R 2
      + 1 *
      V SG,MAX
      Figure 9. Example Inrush Current Without R1 or C1
      The load capacitance, C LOAD , can be estimated using the
      following equation:
      C LOAD +
      (eq. 8)
      C LOAD +
      V IN
      Consider the P-channel load switch circuit shown in
      Figure 7 with the following parameters:
      Table 1. LOAD SWITCH CIRCUIT EXAMPLE
      R1 and C1 determine the turn-on speed of the pass
      transistor. C1 can be calculated by using Equation 9, where
      I INRUSH is the desired maximum inrush current for the load
      switch circuit.
      C 1 +
      ǒ
      R 1
      )
      Ǔ
      R 2
      @
      C LOAD
      Circuit Parameters PMOS Parameters
      V IN = 10 V V SD,MAX = 20 V
      I LOAD,MAX = 5 A V SG,MAX = 8 V
      I IN,MAX = 8 A V TH = −0.67 V
      C LOAD = 1 mF g fs = 5.9 S
      First, R1 and R2 must be selected. For this example,
      a 1 kW resistor was selected for R2. R1 was calculated by
      rearranging Equation 8 and solving for R1:
      R 1 + R R @
      (eq. 9)
      I INRUSH
      C 1
      IN ) V th *
      R 1
      ǒ
      I
      Ǔ
      LOAD
      g
      fs
      V th *
      )
      ǒ
      I
      Ǔ ȣ
      (eq. 10)
      LOAD
      R 2
      g
      fs
      C LOAD
      ȧ @ I
      Ȥ
      V IN * V SGMAX
      V SGMAX
      +
      R 2
      4
      + 250 W
      Next, C1 is calculated using Equation 10 and the
      parameters in Table 1.
      Plugging Equation 7 into Equation 9, C 1 becomes:
      ȡ V
      + ȧ
      Ȣ
      1
      @ 1.6 ms @ 18 A + 1.28 mF
      2
      Inrush Current Example
      Figure 8. Maximum VGS Spec Example from
      Datasheet
      V PL
      (eq. 11)
      For the example current waveform shown in Figure 9,
      C LOAD is estimated as:
      In order to ensure that V SG does not exceed the maximum
      rating of the device, V SG,MAX is used. V SG,MAX can be
      found in the device datasheet (see Figure 8). R2 is the
      pull-up resistor described in previous sections, and is
      recommended to be between 1 kW and 10 kW.
      V IN ) VPL
      1
      @ Dt @ DI
      2
      INRUSH
      http://onsemi.com
      4AND9093/D
      C 1 +
      ǒ
      10 * 0.67 * ǒ 5.9 Ǔ
      5
      250
      5
      )
      Ǔ
      −0.67 * ǒ 5.9 Ǔ
      1000
      @
      of the device, and can potentially damage other components
      within the system.
      The load switch must have a continuous current rating
      greater than the maximum load current of the application.
      Likewise, the MOSFET must not be operated outside of the
      maximum V DS and V GS specifications. The device
      datasheet specifies the absolute maximum ratings and also
      contains a figure showing the Safe Operating Area (SOA).
      The designer must evaluate whether the device will operate
      within its specified SOA for the application.
      Figure 11 shows an example MOSFET SOA for an
      N-channel device. The outer boundaries of the safe
      operating area are determined by: the R DS(on) at maximum
      junction temperature, the maximum drain current I DM , and
      the rated breakdown voltage V DSS of the device. I DM is
      limited by the package, source wires, gate wires and die
      characteristics.
      1 mF
      3
      C 1 + 10.8 nF
      Therefore, for the example circuit, the inrush current will
      be limited to 3 A by selecting a 1 kW pull-up resistor (R1),
      a 250ĂW resistor for R2 and a 10 nF capacitor for C1.
      Turn-on Speed
      Turn-on speed plays an important role in the behavior of
      the load switch. As mentioned, a fast device turn-on creates
      an inrush current. A softer turn-on reduces this current spike.
      However, caution must be taken when slowing down the
      MOSFET turn-on.
      Figure 10 shows a standard load switch datasheet transfer
      curve. Drain current versus gate-to-source voltage is plotted
      at three different temperatures.
      Figure 11. Example MOSFET SOA
      Figure 10. Example Transfer Curve for a Load Switch
      The basic power and current equations used to generate
      the SOA curve are:
      All three temperature curves will intersect at a specific
      V GS . This point is known as the inflection point. For a V GS
      above the inflection point, R DS(on) increases as temperature
      increases. Thus, as the device heats up, cells that are carrying
      higher current will become more resistive and current will
      be shared with cells carrying lower current. This MOSFET
      property creates a uniform current sharing across all the
      cells. Below the inflection point, the MOSFET behaves
      more like a bipolar transistor. As the device heats up, a cell
      with higher current than the surrounding cells will continue
      to take more current. If the device remains within this
      transition region for too long, thermal runaway can occur.
      The load switch should be operated with a V GS above the
      inflection point to ensure proper device function. The
      threshold voltage for the example device shown in Figure 10
      is around 0.8 V. The inflection point occurs around 1.75 V.
      For the example device, it is recommended to operate at
      a V GS of 1.8 V or higher.
      V DS +
      I D +
      Ǹ
      P D
      I D
      or
      I D +
      P D
      V DS
      R D
      R DS(on) , MAX@TJMAX
      (eq. 12)
      (eq. 13)
      First, the outer boundaries of the SOA are drawn: the
      maximum I D and V DS lines. Next, the R DS(on) boundary is
      drawn by using Equations 12 and 13 to determine the end
      points, and the slope of the R DS(on) boundary line is:
      R D
      R DS(on) , MAX@TJMAX
      The DC line is determined by the maximum continuous
      power the device can dissipate. The continuous power
      dissipation is specified in the device datasheet. The DC line
      intersects the outer SOA boundaries in two places: at the
      R DS(on) limit and at the V DS limit. Additional lines are
      plotted for a single pulse of 10 ms, 1 ms, 100 ms and 10 ms
      duration. The safe operation region is located within the
      Safe Operating Area
      The Safe Operating Area (SOA) defines the safe operating
      conditions of the load switch. Operation outside of this
      region can degrade the performance, reliability and lifetime
      http://onsemi.com
      5AND9093/D
      outer I DMAX and V DSMAX limits, and underneath the
      R DS(on) , DC and single pulse lines.
      The example MOSFET device from Figure 11 has the
      following datasheet specifications:
      calculated to be 0.03 A. The second end-point is where the
      DC line intersects the R DS(on) boundary. Therefore, the
      current can be calculated using Equation 13 and then
      plugging the calculated drain current into Equation 12 to
      determine the corresponding voltage. For this example
      MOSFET, the DC line intersects the R DS(ON) boundary at
      0.18 V and 5.5 A. The calculated V DS and I D values can be
      verified with Figure 11.
      The single-pulse lines are calculated using the same
      methodology and equations as for the DC line, but using the
      power dissipation for a single pulse of: 10 ms, 1 ms, 100 ms
      and 10 ms.
      Table 2. EXAMPLE MOSFET DATASHEET SPECS
      Datasheet Parameter Datasheet Value
      BV DSS 30 V
      P D,CONTINUOUS 1 W
      I D,MAX 45 A
      R DS(ON)@TJMAX 33.5 mW
      ON Semiconductor Load Switches
      The R DS(on) line for the Figure 11 example MOSFET can
      be drawn using equations 12, 13 and the values presented in
      Table 2. The first end-point is located at a V DS of 0.1 V, and
      the second end point is located at the I D limit of 45 A.
      Similarly, the DC line can be drawn using Equations 12
      and 13 to calculate the end points. The first DC line
      end-point is at a V DS of 30 V. Using Equation 12 and the P D
      value presented in Table 2, the current at 30 V DS is
      ON Semiconductor has a large portfolio of P-channel and
      N-channel load switches in a wide variety of packages.
      ON Semiconductor load switches are offered in the
      following configurations: single, dual, and complementary.
      Table 3 lists just a few of the vast number of load switches
      that are currently available from ON Semiconductor. For
      a complete product list please visit www.onsemi.com.
      Table 3. ON SEMICONDUCTOR LOAD SWITCHES
      MAX R DS(on)
      (W)
      Pol VDS
      (V) VGS
      (V) ID (A) V GS
      4.5 V V GS
      2.5 V V GS
      1.8 V V GS
      1.5 V
      Single P −20 ±8 0.214 1.6 2.4 3.3 4.5
      Single N −20 ±8 0.229 1.4 1.9 2.7 4.3
      Single P −20 ±8 0.235 1.6 2.4 3.3 4.5
      Single N −20 ±8 0.245 1.5 2.0 4.0 6.8
      NTUD3170NZ Dual N 20 ±8 0.22 1.5 2.0 3.0 4.5
      NTUD3169CZ Complimentary N −20 ±8 0.22 1.5 2.0 3.0 4.5
      P 20 ±8 0.25 5.0 6.0 7.0 10.0
      2.2
      Package Dimension
      (mm) Part Number Configuration
      XLLGA−3 0.6 x 0.6 x 0.4 NTNS3A91PZ** NTNS3190NZ** NTNS3A65PZ** NTNS3164NZ**
      SOT−883
      1.0 x 0.6 x 0.4
      1.0 x 1.0 x 0.5
      SOT−963
      SOT−723
      1.2 x 1.2 x 0.5
      UDFN 2.0 x 2.0 x 0.55
      WDFN 3.3 x 3.3 x 0.8
      NTK3139P** Single P −20 ±6 0.78 0.48 0.67 0.95 NTK3134N** Single N 20 ±6 0.89 0.35 0.45 0.65 1.2
      NTLUS3A18PZ** Single P −20 ±8 8.2 0.018 0.028 0.050 0.090
      NTLUS3A39PZ** Single P 20 ±8 5.2 0.039 0.050 0.081 0.147
      NTTFS3A08PZ** Single P 20 ±8 14 0.0067 0.0090 −− −−
      ** New Products in Development. Samples Available Upon Request.
      http://onsemi.com
      6AND9093/D
      REFERENCES
      [3] Q. Deng. “A Primer on High-Side FET Load
      Switches. EE Times, May 2007.
      [1] C. S. Mitter. “Active Inrush Current Limiting Using
      MOSFETS.” Application Note # AN1542. Motorola.
      [2] P. H. Wilson. “Controlling ‘Inrush’ Current for Load
      Switches in Battery Power Applications.” EE Times
      Asia, July 2001.
      ON Semiconductor and
      are registered trademarks of Semiconductor Components Industries, LLC (SCILLC). SCILLC owns the rights to a number of patents, trademarks,
      copyrights, trade secrets, and other intellectual property. A listing of SCILLC’s product/patent coverage may be accessed at www.onsemi.com/site/pdf/Patent−Marking.pdf. SCILLC
      reserves the right to make changes without further notice to any products herein. SCILLC makes no warranty, representation or guarantee regarding the suitability of its products for any
      particular purpose, nor does SCILLC assume any liability arising out of the application or use of any product or circuit, and specifically disclaims any and all liability, including without
      limitation special, consequential or incidental damages. “Typical” parameters which may be provided in SCILLC data sheets and/or specifications can and do vary in different applications
      and actual performance may vary over time. All operating parameters, including “Typicals” must be validated for each customer application by customer’s technical experts. SCILLC
      does not convey any license under its patent rights nor the rights of others. SCILLC products are not designed, intended, or authorized for use as components in systems intended for
      surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the SCILLC product could create a situation where
      personal injury or death may occur. Should Buyer purchase or use SCILLC products for any such unintended or unauthorized application, Buyer shall indemnify and hold SCILLC and
      its officers, employees, subsidiaries, affiliates, and distributors harmless against all claims, costs, damages, and expenses, and reasonable attorney fees arising out of, directly or indirectly,
      any claim of personal injury or death associated with such unintended or unauthorized use, even if such claim alleges that SCILLC was negligent regarding the design or manufacture
      of the part. SCILLC is an Equal Opportunity/Affirmative Action Employer. This literature is subject to all applicable copyright laws and is not for resale in any manner.
      PUBLICATION ORDERING INFORMATION
      LITERATURE FULFILLMENT:
      Literature Distribution Center for ON Semiconductor
      P.O. Box 5163, Denver, Colorado 80217 USA
      Phone: 303−675−2175 or 800−344−3860 Toll Free USA/Canada
      Fax: 303−675−2176 or 800−344−3867 Toll Free USA/Canada
      Email: orderlit@onsemi.com
      N. American Technical Support: 800−282−9855 Toll Free
      USA/Canada
      Europe, Middle East and Africa Technical Support:
      Phone: 421 33 790 2910
      Japan Customer Focus Center
      Phone: 81−3−5817−1050
      http://onsemi.com
      7
      ON Semiconductor Website: www.onsemi.com
      Order Literature: http://www.onsemi.com/orderlit
      For additional information, please contact your local
      Sales Representative
      AND9093/D
    </p>
  </Layout>
)

export default IndexPage
