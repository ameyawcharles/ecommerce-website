

--
-- Database: `mydb`
--

CREATE DATABASE IF NOT EXISTS `ecom` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ecom`;

-- --------------------------------------------------------

--
-- Table structure for table `asu`
--

DROP TABLE IF EXISTS `asu`;
CREATE TABLE IF NOT EXISTS `asu` (
`id` int(11) NOT NULL,
`name` varchar(50) NOT NULL,
`email` varchar(50) NOT NULL,
`message` varchar(200) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asu`
--
ALTER TABLE `asu`
ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asu`
--
ALTER TABLE `asu`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;